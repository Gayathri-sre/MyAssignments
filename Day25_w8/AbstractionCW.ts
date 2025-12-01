/* ClassRoom:
create abstract class 
fill() -> implement
clear()->implement
locator()-> unimplement
frame() -> unimplement

create class 
-> implement methods
-> create object and call the methods */

abstract class halfHidden {

    fill() {
        console.log("Fill the form")
    }

    clear() { 
        console.log("Clear and reset")
    }
    abstract locator():void
    abstract frame():void
}

class helpAbstract extends halfHidden {
    locator() {
        console.log("Implement Locator method")
    }
    frame() {
        console.log("Implement frame method")
    }
}

let objForClass = new helpAbstract()
objForClass.fill()
objForClass.clear()
objForClass.locator()
objForClass.frame()