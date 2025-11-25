"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassCW_1 = require("./ClassCW");
var object1 = new ClassCW_1.LoginPage("Yahoo", "MyTitle");
object1.launchBrowser();
object1.loadurl;
console.log("Calling from another class : " + object1.url + " and the title is : " + object1.title);
object1.Login();
object1.CallMethods();
