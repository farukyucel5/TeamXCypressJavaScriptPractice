describe("handling IFrames",() => {

    beforeEach(() => {
        cy.viewport(1280, 720)
    
      })
  
    it.only("approach1",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(10000)
        let iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body').should("be.visible").then(cy.wrap)

        iframe.clear().type("I here inside the Iframe {cmd+a}")

        cy.get("[aria-label='Bold']").click()

        cy.wait(5000)

    })
    it("approach1",()=>{

        cy.visit("https://www.theguardian.com/international")
       

    })



})