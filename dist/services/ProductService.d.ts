import { Database } from '../database/Database';
import { Product } from '../models/Product';
export declare class ProductService {
    private db;
    constructor(database: Database);
    addProduct(product: Product): void;
    getProductList(): string;
    getTotal(): number;
}
//# sourceMappingURL=ProductService.d.ts.map