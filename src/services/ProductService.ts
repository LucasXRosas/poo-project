import { get } from 'node:http';
import { Database } from '../database/Database';
import { Product } from '../models/Product';

export class ProductService {
  private db: Database;

  constructor(database: Database) {
    this.db = database;
  }

  public addProduct(product: Product): void {
    const PRODUCTS = this.db.getProducts();
    PRODUCTS.push(product);
    this.db.saveProducts(PRODUCTS);
  }

  public getProductList(): string {
    const PRODUCTS = this.db.getProducts();
    let s: string = '=== REGISTERED PRODUCTS ===';
    for (let i = 0; i < PRODUCTS.length; i++) {
      s += `\n[${PRODUCTS[i]?.getType()}] ${PRODUCTS[i]?.getName()} - $${PRODUCTS[i]?.getPrice()}`;
    }
    if (PRODUCTS.length === 0) s += '\nNo products registered yet.';
    return s;
  }

  public getTotal(): number {
    const PRODUCTS = this.db.getProducts();
    return PRODUCTS.reduce((t: number, p: Product) => t + p.getPrice(), 0);
  }
}
