describe('template spec', () => {
  it('Positive title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq","OrangeHRM")
  })

  it('Negative title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq","OrangeHRM1")
  })


})