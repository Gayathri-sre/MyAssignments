import test from "@playwright/test";
import {LeadsSales} from "./LeadsSales"
import { OpportunitiesSales } from "./OpportunitySales";
 
test ("Sales Lead Page",async({page})=> {

    const salesObj=new LeadsSales(page)
    await salesObj.launchSalesforce()
    await salesObj.loginPageUserSales("gayathriv2610306@agentforce.com")
    await salesObj.loginPagePassSales("Sremithra@123")
    await salesObj.click()
    await salesObj.clickOnLeadsSales()
    await salesObj.clickOnNewLeads()
    
})

test ("Sales Opportunity Page",async({page})=> {

    const salesObj=new OpportunitiesSales(page)
    await salesObj.launchSalesforce()
    await salesObj.loginPageUserSales("gayathriv2610306@agentforce.com")
    await salesObj.loginPagePassSales("Sremithra@123")
    await salesObj.click()
    await salesObj.clickOnOpportunities()
    await salesObj.clickOnOpportunityPage()
    
})