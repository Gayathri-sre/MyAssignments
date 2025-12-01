/* ClassRoom:
create abstract class
fill() -> implement
clear()->implement
locator()-> unimplement
frame() -> unimplement

create class
-> implement methods
-> create object and call the methods */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var halfHidden = /** @class */ (function () {
    function halfHidden() {
    }
    halfHidden.prototype.fill = function () {
        console.log("Fill the form");
    };
    halfHidden.prototype.clear = function () {
        console.log("Clear and reset");
    };
    return halfHidden;
}());
var helpAbstract = /** @class */ (function (_super) {
    __extends(helpAbstract, _super);
    function helpAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    helpAbstract.prototype.locator = function () {
        console.log("Implement Locator method");
    };
    helpAbstract.prototype.frame = function () {
        console.log("Implement frame method");
    };
    return helpAbstract;
}(halfHidden));
var objForClass = new helpAbstract();
objForClass.fill();
objForClass.clear();
objForClass.locator();
objForClass.frame();
