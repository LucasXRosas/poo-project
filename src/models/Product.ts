import { ProductType } from './ProductType';
import { Printable } from './Printable';

export abstract class Product implements Printable {
  protected name!: string;
  protected price!: number;
  protected type!: ProductType;

  public setName(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }

  public setPrice(price: number): void;
  public setPrice(priceString: string): void;
  public setPrice(price: number | string): void {
    if (typeof price === 'string') {
      this.price = parseFloat(price);
    } else {
      this.price = price;
    }
  }
  public getPrice(): number {
    return this.price;
  }

  public setType(type: ProductType) {
    this.type = type;
  }
  public getType(): ProductType {
    return this.type;
  }

  public getDetails(): string {
    return `${this.name} - $${this.price}`;
  }
}
