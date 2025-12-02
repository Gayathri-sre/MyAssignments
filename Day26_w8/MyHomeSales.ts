import { LoginSales } from "./LoginSales";

export class MyHomeSales extends LoginSales {

    async clickOnLeadsSales() {
        await this.vari.click("text=Leads")
    }
    async clickOnContacts() {
        await this.vari.click("text=Contacts")
    }
    async clickOnOpportunities() {
        await this.vari.click("text=Opportunities")
    }
}