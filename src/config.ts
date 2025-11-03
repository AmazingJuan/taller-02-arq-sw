import dotenv from 'dotenv';
dotenv.config();

interface Config {
  bucketUrl: string;
  port: number;
  containerId: string;
}

export const config: Config = {
  bucketUrl: process.env.GCP_BUCKET_URL ?? '',
  port: Number(process.env.PORT) || 3000,
  containerId: process.env.CONTAINER_ID || "unknown",
};
