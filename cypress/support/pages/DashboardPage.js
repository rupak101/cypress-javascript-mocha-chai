class DashboardPage {
    getOverViewTab() {
        return cy.xpath("//*[@class='tab site_index active']")
    }
}

export default DashboardPage