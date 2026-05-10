"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Product_1 = require("./Product");
const ProductType_1 = require("./ProductType");
class Game extends Product_1.Product {
    constructor() {
        super();
        this.setType(ProductType_1.ProductType.GAME);
    }
    getDetails() {
        return `[Game] ${super.getDetails()}`;
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map