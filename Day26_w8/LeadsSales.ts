import { MyHomeSales } from "./MyHomeSales";

export class LeadsSales extends MyHomeSales {
    async clickOnNewLeads() {
        await this.vari.locator('//button[@name="New"]').click()
    }
}