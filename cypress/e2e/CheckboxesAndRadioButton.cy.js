
describe("Check radio elements",() => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
      })

    it("Checking Radio buttons",() => {

        cy.get("#male").should("be.visible")
        cy.get("#female").should("be.visible")

        cy.get("#male").check().should("be.checked")
        cy.get("#female").should("not.be.checked")

        cy.get("#other").should("be.enabled")
    })


})

describe("checking checkboxes",() => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
      })

    it("Checking radio buttons",() => {

        cy.get("#monday").should("be.visible")
        cy.get("#monday").check().should("be.checked")

        //unselecting checkbox
        cy.get("#monday").uncheck().should("not.be.checked")

        //selecting all checkboxes

        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        //unselecting all checkboxes

        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        //selecting first checkbox

        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")


    })
})

