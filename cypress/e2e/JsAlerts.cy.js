

describe("Alerts",()=>{

    beforeEach(()=>{
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
        
    });

    it("can assert the text on the popup",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //allert window automatically is closed by Cypress

        cy.get("#result").should("have.text","You successfully clicked an alert")
    })


})