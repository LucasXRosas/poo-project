"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
const Product_1 = require("./Product");
const ProductType_1 = require("./ProductType");
class Console extends Product_1.Product {
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    constructor() {
        super();
        this.setType(ProductType_1.ProductType.CONSOLE);
    }
    getDetails() {
        return `[Console - ${this.brand}] ${super.getDetails()}`;
    }
}
exports.Console = Console;
//# sourceMappingURL=Console.js.map