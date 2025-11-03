# -------------------------------------------------
# Etapa 1: build
# -------------------------------------------------
FROM node:22-alpine AS build

WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar todas las dependencias (incluidas devDependencies)
RUN npm install

# Copiar el código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# -------------------------------------------------
# Etapa 2: producción
# -------------------------------------------------
FROM node:22-alpine

WORKDIR /usr/src/app

# Copiar solo dependencias de producción
COPY package*.json ./
RUN npm install --production

# Copiar la carpeta compilada desde la etapa build
COPY --from=build /usr/src/app/dist ./dist

# Variables de entorno
ARG PORT=3000
ENV PORT=${PORT}
ENV NODE_ENV=production

# Exponer el puerto
EXPOSE ${PORT}

# Ejecutar la app
CMD ["node", "dist/app.js"]
