class EditProfilePage {
  getUserNameField() {
    return cy.get('#User_name')
  }
  getUserEmailField() {
    return cy.get('#User_email')
  }
  getLanguageRadioButton() {
    return cy.get('.box_languages > :nth-child(1) > input')
  }
  getSubmitButton() {
    return cy.xpath("//*[@type='submit']")
  }
  getSuccessMessage() {
    return cy.get('.flash-message')
  }
  getErrorSummary() {
    return cy.xpath("//*[@class='errorSummary']")
  }
  getErrorMessage() {
    return cy.xpath("//*[@class='errorMessage' and @id='User_email_em_']")
  }
}

export default EditProfilePage
