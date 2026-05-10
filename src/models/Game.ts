import { Product } from './Product';
import { ProductType } from './ProductType';

export class Game extends Product {
  constructor() {
    super();
    this.setType(ProductType.GAME);
  }
}
