"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setPrice(price) {
        if (typeof price === 'string') {
            this.price = parseFloat(price);
        }
        else {
            this.price = price;
        }
    }
    getPrice() {
        return this.price;
    }
    setType(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    getDetails() {
        return `${this.name} - $${this.price}`;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map