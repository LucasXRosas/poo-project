"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(database) {
        this.db = database;
    }
    addProduct(product) {
        const PRODUCTS = this.db.getProducts();
        PRODUCTS.push(product);
        this.db.saveProducts(PRODUCTS);
    }
    getProductList() {
        var _a, _b, _c;
        const PRODUCTS = this.db.getProducts();
        let s = '=== REGISTERED PRODUCTS ===';
        for (let i = 0; i < PRODUCTS.length; i++) {
            s += `\n[${(_a = PRODUCTS[i]) === null || _a === void 0 ? void 0 : _a.getType()}] ${(_b = PRODUCTS[i]) === null || _b === void 0 ? void 0 : _b.getName()} - $${(_c = PRODUCTS[i]) === null || _c === void 0 ? void 0 : _c.getPrice()}`;
        }
        if (PRODUCTS.length === 0)
            s += '\nNo products registered yet.';
        return s;
    }
    getTotal() {
        const PRODUCTS = this.db.getProducts();
        return PRODUCTS.reduce((t, p) => t + p.getPrice(), 0);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map