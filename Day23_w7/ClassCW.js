"use strict";
/* Class Room 1:
Class as LoginPage
 properties -> url,title
methods -> public login(), private logout()
constructor -> paramterized constructor(url:string,title:string)
create object inside same file

create another file
call the LoginPage */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var LoginPage = /** @class */ (function () {
    //Parametrised Constructor 
    function LoginPage(url, title) {
        this.url = url;
        this.title = title;
        //console.log("Url is : "+this.url)
        //console.log("Title is : "+this.title)
    }
    //Method
    LoginPage.prototype.launchBrowser = function () {
        console.log("Launching the Browser");
    };
    LoginPage.prototype.loadurl = function (url) {
        console.log("Loading the url: " + url);
    };
    LoginPage.prototype.Login = function () {
        console.log("Login");
    };
    LoginPage.prototype.logout = function () {
        console.log("Logout");
    };
    LoginPage.prototype.CallMethods = function () {
        this.logout();
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
var object = new LoginPage("Google", "Title");
object.launchBrowser();
object.loadurl("www.google.com");
console.log("Url is : " + object.url);
console.log("Title is : " + object.title);
object.Login();
object.CallMethods();
