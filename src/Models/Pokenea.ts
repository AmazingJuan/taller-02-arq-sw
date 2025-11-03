/**
 * Pokenea Model
 *
 * Attributes:
 *
 * @_id - number - Unique identifier of the Pokenea
 * @_name - string - Name of the Pokenea
 * @_height - number - Height of the Pokenea in meters
 * @_ability - string - Ability of the Pokenea
 * @_image - string - Image URL of the Pokenea
 * @_philosophical_quote - string - Philosophical quote of the Pokenea
 */

export class Pokenea {
  constructor(
    private _id: number,
    private _name: string,
    private _height: number,
    private _ability: string,
    private _image: string,
    private _philosophical_quote: string
  ) {}

  // ID
  public getId(): number {
    return this._id;
  }
  public setId(id: number): void {
    this._id = id;
  }

  // Name
  public getName(): string {
    return this._name;
  }
  public setName(name: string): void {
    this._name = name;
  }

  // Height
  public getHeight(): number {
    return this._height;
  }
  public setHeight(height: number): void {
    this._height = height;
  }

  // Ability
  public getAbility(): string {
    return this._ability;
  }
  public setAbility(ability: string): void {
    this._ability = ability;
  }

  // Image
  public getImage(): string {
    return this._image;
  }
  public setImage(image: string): void {
    this._image = image;
  }

  // Philosophical Quote
  public getPhilosophicalQuote(): string {
    return this._philosophical_quote;
  }
  public setPhilosophicalQuote(quote: string): void {
    this._philosophical_quote = quote;
  }
}
