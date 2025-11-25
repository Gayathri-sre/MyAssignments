/* Class Room 1:
Class as LoginPage
 properties -> url,title
methods -> public login(), private logout()
constructor -> paramterized constructor(url:string,title:string)
create object inside same file 

create another file 
call the LoginPage */

export class LoginPage {

    //Properties
    url:string
    title:string

    //Method
    launchBrowser(){
        console.log("Launching the Browser")

    }

    loadurl(url:string){
        console.log("Loading the url: "+url)
    }

    public Login() {
        console.log("Login")

    }

    private logout() {
        console.log("Logout")
    }

    public CallMethods() {
        this.logout()
    }
    
    //Parametrised Constructor 
    constructor(url:string,title:string) {
    this.url=url
    this.title=title
    //console.log("Url is : "+this.url)
    //console.log("Title is : "+this.title)
}
}

let object=new LoginPage("Google","Title")
    object.launchBrowser()
    object.loadurl(`www.google.com`)
    console.log("Url is : "+object.url)
    console.log("Title is : "+object.title)
    object.Login()
    object.CallMethods()

