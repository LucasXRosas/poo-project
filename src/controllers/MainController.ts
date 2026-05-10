import { Database } from '../database/Database';
import { ProductService } from '../services/ProductService';
import { FirstScreen } from '../views/FirstScreen';
import { Game } from '../models/Game';
import { Console } from '../models/Console';
import { Product } from '../models/Product';

export class MainController {
  private firstScreen!: FirstScreen;
  public database: Database;
  private productService: ProductService;

  constructor(database: Database) {
    this.database = database;
    this.productService = new ProductService(this.database);
    this.firstScreen = new FirstScreen(this);
  }

  public getNewGame(): Game {
    return new Game();
  }

  public getNewConsole(brand: string): Console {
    const console = new Console();
    console.setBrand(brand);
    return console;
  }

  public addProduct(product: Product): void {
    this.productService.addProduct(product);
  }

  public getProductList(): string {
    return this.productService.getProductList();
  }

  public getTotal(): number {
    return this.productService.getTotal();
  }
}
