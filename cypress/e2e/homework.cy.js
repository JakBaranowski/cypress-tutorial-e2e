/// <reference types="cypress" />

class LoginPage {
  enterEmail(username) {
    cy.get('[id="username"]')
      .clear()
      .type(username)
    return this
  }

  enterPassword(pswd) {
    cy.get('[id="password"]')
        .clear()
        .type(pswd)
    return this
  }

  submit() {
    cy.get('[id=login-button]').click()
  }
}

describe('Sign in', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Logs in with valid credentials', () => {
    const loginPage = new LoginPage()
    
    loginPage.enterEmail("aaa@aaa.com")
    loginPage.enterPassword("aaa")
    loginPage.submit()
  })
})