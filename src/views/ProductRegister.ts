import * as readlineSync from 'readline-sync';
import { MainController } from '../controllers/MainController';

export class ProductRegister {
  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
  }

  public registerGame(): void {
    let game = this.controller.getNewGame();
    game.setName(readlineSync.question('Game: '));
    game.setPrice(parseFloat(readlineSync.question('Price: ')));

    this.controller.addProduct(game);
    console.log('\nGame registered successfully!');
  }

  public registerConsole(): void {
    let consoleProd = this.controller.getNewConsole(readlineSync.question('Brand: '));
    consoleProd.setName(readlineSync.question('Console: '));
    consoleProd.setPrice(parseFloat(readlineSync.question('Price: ')));

    this.controller.addProduct(consoleProd);
    console.log('\nConsole registered successfully!');
  }

  public showProductList(): void {
    let list = this.controller.getProductList();
    let total = this.controller.getTotal();

    console.log(`\n${list}`);
    console.log(`\nTotal: $${total}`);
  }
}
