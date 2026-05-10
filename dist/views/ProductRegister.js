"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRegister = void 0;
const readlineSync = __importStar(require("readline-sync"));
class ProductRegister {
    constructor(controller) {
        this.controller = controller;
    }
    registerGame() {
        let game = this.controller.getNewGame();
        game.setName(readlineSync.question('Game: '));
        game.setPrice(parseFloat(readlineSync.question('Price: ')));
        this.controller.addProduct(game);
        console.log('\nGame registered successfully!');
    }
    registerConsole() {
        let consoleProd = this.controller.getNewConsole(readlineSync.question('Brand: '));
        consoleProd.setName(readlineSync.question('Console: '));
        consoleProd.setPrice(parseFloat(readlineSync.question('Price: ')));
        this.controller.addProduct(consoleProd);
        console.log('\nConsole registered successfully!');
    }
    showProductList() {
        let list = this.controller.getProductList();
        let total = this.controller.getTotal();
        console.log(`\n${list}`);
        console.log(`\nTotal: $${total}`);
    }
}
exports.ProductRegister = ProductRegister;
//# sourceMappingURL=ProductRegister.js.map