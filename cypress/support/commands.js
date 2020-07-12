// ***********************************************
// create various custom commands and overwrite
// existing commands.

// ***********************************************

Cypress.Commands.add("login", (userName,password) => {
    cy.visit('/')
    //Enter user name and password
    cy.get('#LoginForm_username').type(userName)
    cy.get('#LoginForm_password').type(password)
    //click on login button
    cy.xpath("//*[@class='mt30']//*[@type='submit']").click()
})
Cypress.Commands.add("editProfile", () => {
    //click on user menu
    cy.xpath("//*[@class='usrDropDown']//*[@href='/setting/user']").click({ force: true })
    //verify the edit user url
    cy.url().should('include', 'user')
})
