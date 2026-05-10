"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./database/Database");
const MainController_1 = require("./controllers/MainController");
const DB = new Database_1.Database();
new MainController_1.MainController(DB);
//# sourceMappingURL=index.js.map