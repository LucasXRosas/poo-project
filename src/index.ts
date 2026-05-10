import { Database } from './database/Database';
import { MainController } from './controllers/MainController';

const DB = new Database();
new MainController(DB);
