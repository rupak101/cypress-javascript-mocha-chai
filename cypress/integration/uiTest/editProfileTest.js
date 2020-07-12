/// <reference types="Cypress" />
import HomePage from "../../support/pages/HomePage"
import EditProfilePage from "../../support/pages/EditProfilePage"

describe('Edit user profile', function () {
    const homePage = new HomePage()
    const editProfilePage = new EditProfilePage()

    beforeEach(function () {
        cy.fixture('dataProvider').then(function (data) {
            this.data = data
        })
    })

    const firstAndLastName = ["test1","QA Assessment Account"]
    firstAndLastName.forEach(name => {
        it(`Edit name to ${name} on edit profile page`, function () {
            cy.login(this.data.userName, this.data.password)
            cy.editProfile()
            editProfilePage.getUserNameField().clear().type(name)
            //click on submit button
            editProfilePage.getSubmitButton().click()
            //Validate the success message
            editProfilePage.getSuccessMessage().should('be.visible')
            editProfilePage.getUserNameField().should('have.value', name)
        })
    })

    it("Edit profile with invalid email address", function () {
        cy.login(this.data.userName, this.data.password)
        cy.editProfile()
        //Enter invalid email address
        editProfilePage.getUserEmailField().clear().type(this.data.invalidEmail)
        //click on submit button
        editProfilePage.getSubmitButton().click()
        //Validate the error message
        editProfilePage.getErrorMessage().should('be.visible')
        editProfilePage.getErrorSummary().should('be.visible')

    })

    it("Change language on edit profile", function () {
        cy.login(this.data.userName, this.data.password)
        cy.editProfile()
        editProfilePage.getLanguageRadioButton().click()
        //click on submit button
        editProfilePage.getSubmitButton().click()
        //Validate the success message
        editProfilePage.getSuccessMessage().should('be.visible')
        editProfilePage.getLanguageRadioButton().should('be.checked')
    })

    it("User logout from the application", function () {
        cy.login(this.data.userName, this.data.password)
        homePage.getLogOutButton().click({ force: true })
        //Validate the logout page
        cy.url().should('include', 'login')
        cy.title().should('have.equal', 'Login - bookingkit')
    })
})
