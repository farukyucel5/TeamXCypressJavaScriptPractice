
describe("Handling window",()=>{


    it("Approach1 for handling windows",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example >a").invoke("removeAttr","target").click()//target attribute is removed in order to open the 
        //new window on the same window
        //now we are on a new tab
        let newWinHeading=cy.get(".example >h3")
        newWinHeading.should("be.visible")
        let expectedWinHeadingText="New Window"
        newWinHeading.then((n)=>{
           let actualText = n.text()

            expect(actualText).to.eq(expectedWinHeadingText)
            assert.equal(actualText,expectedWinHeadingText)

        })

        cy.wait(2000)

        cy.go('back')//back to the previous window

       var mainPageHeading= cy.get(".example>h3")
       mainPageHeading.should("be.visible")

       mainPageHeading.then((n)=>{
        assert(n.text(),"Opening a new window")
       })

        
    })




})