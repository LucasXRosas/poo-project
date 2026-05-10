import * as fs from 'fs';
import * as path from 'path';
import { Product } from '../models/Product';
import { Game } from '../models/Game';
import { Console } from '../models/Console';
import { ProductType } from '../models/ProductType';

export class Database {
  private file = path.resolve(__dirname, '../../data/db.json');

  public getProducts(): Product[] {
    try {
      const DATA = JSON.parse(fs.readFileSync(this.file, 'utf-8'));

      return DATA.products.map((p: any) => {
        let prod = p.type === ProductType.GAME ? new Game() : new Console();
        prod.setName(p.name);
        prod.setPrice(p.price);
        return prod;
      });
    } catch (error) {
      console.error('Error reading database', error);
      return [];
    }
  }

  public saveProducts(products: Product[]): void {
    const DATA_TO_SAVE = products.map((p) => ({
      name: p.getName(),
      price: p.getPrice(),
      type: p.getType(),
    }));
    fs.writeFileSync(this.file, JSON.stringify({ products: DATA_TO_SAVE }, null, 2));
  }
}
