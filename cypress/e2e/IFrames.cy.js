describe("handling IFrames",() => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit("https://the-internet.herokuapp.com/iframe")
    
      })
  
    it("approach1",()=>{

        
        let iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body').should("be.visible").then(cy.wrap)

        iframe.clear()
        iframe.type("I here inside the Iframe {cmd+a}")

        cy.get("[aria-label='Bold']").click()

        cy.wait(5000)

    })
    it.only("approach2",()=>{

      let iframe=cy.getIFrame('#mce_0_ifr')
      iframe.clear()
      iframe.type("I'm here inside the Iframe {cmd+a}")
      cy.get("[aria-label='Bold']").click()
      cy.wait(5000)
        
    })



})