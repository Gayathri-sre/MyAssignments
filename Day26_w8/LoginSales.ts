/* ClassRoom:
salesforces -> dilipkumar.rajendran@testleaf.com , TestLeaf@2025
Login page
HomePage -> Leads,Tasks,Accounts
LeadsPage -> New button
AccountsPage -> Discover companies */
//LoginSales-MyHomeSales-LeadsSales

import {Page} from "playwright";

export class LoginSales {

        vari:Page

        constructor (vari:Page) {
            this.vari=vari
            console.log("Login Sales Constructor")
        }

        async launchSalesforce() {
            await this.vari.goto("https://login.salesforce.com/")
        }
        async loginPageUserSales(username:string) {
            await this.vari.fill("username",username)
        }
        async loginPagePassSales(password:string) {
            await this.vari.fill("password",password)
        }
        async click() {
            await this.vari.click(".Login")
        }
        
}