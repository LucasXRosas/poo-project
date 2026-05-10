import { Product } from './Product';
import { ProductType } from './ProductType';

export class Console extends Product {
  public brand!: string;

  public getBrand(): string {
    return this.brand;
  }

  public setBrand(brand: string) {
    this.brand = brand;
  }
  constructor() {
    super();
    this.setType(ProductType.CONSOLE);
  }

  public getDetails(): string {
    return `[Console - ${this.brand}] ${super.getDetails()}`;
  }
}
