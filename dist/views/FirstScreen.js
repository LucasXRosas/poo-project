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
exports.FirstScreen = void 0;
const readlineSync = __importStar(require("readline-sync"));
const ProductRegister_1 = require("./ProductRegister");
class FirstScreen {
    constructor(controller) {
        this.controller = controller;
        this.productRegister = new ProductRegister_1.ProductRegister(controller);
        this.mainMenu();
    }
    mainMenu() {
        let open = true;
        while (open) {
            console.log('\n=== MENU ===\n');
            const option = parseInt(readlineSync.question('1. Add Game\n2. Add Console\n3. List Products\n4. Exit\nChoose: '));
            switch (option) {
                case 1:
                    this.productRegister.registerGame();
                    break;
                case 2:
                    this.productRegister.registerConsole();
                    break;
                case 3:
                    this.productRegister.showProductList();
                    break;
                case 4:
                    console.log('Leaving System...');
                    open = false;
                    break;
                default:
                    console.log('Choose an option from 1 to 4.');
                    break;
            }
        }
    }
}
exports.FirstScreen = FirstScreen;
//# sourceMappingURL=FirstScreen.js.map