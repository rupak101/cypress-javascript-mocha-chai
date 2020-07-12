/// <reference types="Cypress" />
import HomePage from "../../support/pages/HomePage"
import DashboardPage from "../../support/pages/DashboardPage"

describe('Open dashboard page', function () {
    const dashboardPage = new DashboardPage()
    const homePage = new HomePage()

    beforeEach(function () {
        cy.fixture('dataProvider').then(function (data) {
            this.data = data
        })
    })

    it("Open dashboard page", function () {
        //User login
        cy.login(this.data.userName, this.data.password)
        //click on dashboard
        homePage.getDashboardTab().click({ force: true })
        //Validate the dashboard is opened
        dashboardPage.getOverViewTab().should('be.visible')
        cy.title().should('have.equal', 'Dashboard - bookingkit')
        cy.url().should('contain', 'index')
    })
})
