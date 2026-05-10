import { Product } from './Product';
import { ProductType } from './ProductType';

export class Console extends Product {

  constructor() {
    super();
    this.setType(ProductType.CONSOLE);
  }

  public getDetails(): string {
    return `[Console] ${super.getDetails()}`;
  }
}
