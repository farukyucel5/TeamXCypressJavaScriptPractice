describe("url and title assertions", ()=>{
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit("https://trendlifebuy.com")
      cy.wait(3000)
      cy.xpath("(//i[@class='ti-close'])[2]").click()
    })

   it("login button is clicked", () => {

    cy.xpath("(//a[text()='Login'])[1]").click()

    cy.get("#text").type("user006@trendlifebuy.com")
    cy.get("#password").type("Trendlife123")
    cy.get("#sign_in_btn").click()

    cy.get(".log_out").should("be.visible")

   })
  

})