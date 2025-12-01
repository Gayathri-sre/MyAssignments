import { custFixture } from "./CusFixSales.spec"

custFixture("Using Custom Fixture Salesforce App launcher",async({useLogin})=> {

    await useLogin.click("[title='App Launcher']")

})
