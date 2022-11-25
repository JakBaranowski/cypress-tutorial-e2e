describe('My first test', function () {
  it('navigates to google.com and verify title', function () {
    cy.visit('https://google.com')
    cy.title().should('eq', 'Google')
  })
})