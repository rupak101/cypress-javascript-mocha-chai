class HomePage {
  getLogOutButton() {
    return cy.xpath("//*[@class='usrDropDown']//*[@href='/site/logout']")
  }
  getDashboardTab() {
    return cy.get(".dashboard-btn.menuBtn")
  }
}

export default HomePage
