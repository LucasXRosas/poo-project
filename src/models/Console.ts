import { Product } from './Product';
import { ProductType } from './ProductType';

export class Console extends Product {
  private brand!: string;

  constructor() {
    super();
    this.setType(ProductType.CONSOLE);
  }

  public setBrand(brand: string): void {
    this.brand = brand;
  }

  public getBrand(): string {
    return this.brand;
  }

  public getDetails(): string {
    return `[Console - ${this.brand}] ${super.getDetails()}`;
  }
}
