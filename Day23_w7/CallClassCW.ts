import {LoginPage} from './ClassCW'

let object1 = new LoginPage("Yahoo","MyTitle")
object1.launchBrowser()
object1.loadurl
console.log("Calling from another class : "+object1.url+" and the title is : "+object1.title)
object1.Login()
object1.CallMethods()