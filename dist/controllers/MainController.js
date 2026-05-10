"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
const ProductService_1 = require("../services/ProductService");
const FirstScreen_1 = require("../views/FirstScreen");
const Game_1 = require("../models/Game");
const Console_1 = require("../models/Console");
class MainController {
    constructor(database) {
        this.database = database;
        this.productService = new ProductService_1.ProductService(this.database);
        this.firstScreen = new FirstScreen_1.FirstScreen(this);
    }
    getNewGame() {
        return new Game_1.Game();
    }
    getNewConsole(brand) {
        const console = new Console_1.Console();
        console.setBrand(brand);
        return console;
    }
    addProduct(product) {
        this.productService.addProduct(product);
    }
    getProductList() {
        return this.productService.getProductList();
    }
    getTotal() {
        return this.productService.getTotal();
    }
}
exports.MainController = MainController;
//# sourceMappingURL=MainController.js.map