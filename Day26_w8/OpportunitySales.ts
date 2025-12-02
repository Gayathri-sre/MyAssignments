import { MyHomeSales } from "./MyHomeSales";

export class OpportunitiesSales extends MyHomeSales {

    async clickOnOpportunityPage() {
        await this.vari.locator('//input[@name="Opportunity-search-input"]').fill("State")
        await this.vari.press('//input[@name="Opportunity-search-input"]',"Enter")
    }
    
}