import { Database } from '../database/Database';
import { Game } from '../models/Game';
import { Console } from '../models/Console';
import { Product } from '../models/Product';
export declare class MainController {
    private firstScreen;
    database: Database;
    private productService;
    constructor(database: Database);
    getNewGame(): Game;
    getNewConsole(brand: string): Console;
    addProduct(product: Product): void;
    getProductList(): string;
    getTotal(): number;
}
//# sourceMappingURL=MainController.d.ts.map