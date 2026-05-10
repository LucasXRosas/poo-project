import * as readlineSync from 'readline-sync';
import { MainController } from '../controllers/MainController';
import { ProductRegister } from './ProductRegister';

export class FirstScreen {
  private controller: MainController;
  private productRegister: ProductRegister;

  constructor(controller: MainController) {
    this.controller = controller;
    this.productRegister = new ProductRegister(controller);
    this.mainMenu();
  }

  public mainMenu(): void {
    let open: boolean = true;

    while (open) {
      console.log('\n=== MENU ===\n');
      const option = parseInt(
        readlineSync.question('1. Add Game\n2. Add Console\n3. List Products\n4. Exit\nChoose: '),
      );

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
