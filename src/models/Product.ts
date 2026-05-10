import { ProductType } from './ProductType';

export abstract class Product {
  protected name!: string;
  protected price!: number;
  protected type!: ProductType;

  public setName(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }

  public setPrice(price: number) {
    this.price = price;
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
}
