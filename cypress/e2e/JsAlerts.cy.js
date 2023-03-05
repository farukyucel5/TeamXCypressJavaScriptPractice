

describe("Alerts",()=>{

    beforeEach(()=>{
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
        
    });

    it("js alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //allert window automatically is closed by Cypress

        cy.get("#result").should("have.text","You successfully clicked an alert")
    })

    it("confirmation alerts-Ok",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')//getting the text on the allert box and validating it
        })

        //By default,confirmation alerts are handled pressing ok button


        cy.get("#result").should("have.text","You clicked: Ok")
    })

    it("confirmation alerts -Cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')//getting the text on the allert box and validating it
        })

        cy.on('window:confirm',(t)=> false) //Cypress closes alert window using cancel button


        cy.get("#result").should("have.text","You clicked: Cancel")
    })

    it("Js prompts",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Welcome to the Internet")
        })

        cy.get("[onclick='jsPrompt()']").click()


        cy.get("#result").should("have.text","You entered: Welcome to the Internet")
    })

    it.only("Js prompts cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then(win => {
              let winPrompt= cy.stub(win, 'prompt')

              winPrompt.returns("Welcome to the Internet")
              cy.wait(3000)

              winPrompt.callsFake(() => null)
            
            })

           

        cy.get("[onclick='jsPrompt()']").click()

         //Cypress closes alert window using cancel button

        

        




        cy.get("#result").should("have.text","You entered: null")
    })



})