//pisetap755@tohup.com
//Faruk12068036;

describe("Login Suite", ()=>{
      beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
        cy.visit("https://trendlifebuy.com")
      })

      it("implicit assersion1",()=>{//css selector method is employed

        cy.url().should('include','trend')//implicit assertions
        cy.url().should('eq','https://trendlifebuy.com/')
        cy.url().should('contain','trendlife')
  
      })
      it("implicit assersion2",()=>{//css selector method is employed
      
      cy.url().should('include','trend')//implicit assertions
      .should('eq','https://trendlifebuy.com/')
      .should('contain','trendlife')
      })

     it("implicit assersion3",()=>{//css selector method is employed
      
      cy.url().should('include','trend')//implicit assertions
      .and('eq','https://trendlifebuy.com/')
      .and('contain','trendlife')

      })

      it("implicit assersion negativeness keyword",()=>{//css selector method is employed
      
       cy.url().should('not.include','fashion')//implicit assertions
       .and('not.eq','https://trendlifebuy.com')
       .and('not.contain','trendy')
  
       cy.get("span a[href='https://trendlifebuy.com/login']").click()
  

      })

      it("implicit assersion title and logo",()=>{//css selector method is employed
        cy.title().should('eq','Trendlifebuy Online Shopping')//implicit
        cy.get('.logo_img > a > img').should('be.visible').and('exist')
        cy.xpath("//a").should('have.length',1094)

      })


})


describe("search test", ()=>{
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
      })

    it("test1",()=>{//css selector method is employed

        cy.visit("https://trendlifebuy.com")
        cy.xpath("//button[@class='btn input-group-append']").click()
        cy.xpath("(//input[@id='inlineFormInputGroup'])[1]").type("phone")
        cy.xpath("//button[@class='btn input-group-append']").click()

        let expText=" New design mobile 2021 "

        cy.xpath("//h4[text()=' New design mobile 2021 ']").then((n)=>{
           let actualText = n.text()

            expect(actualText).to.eq(expText)
            assert.equal(actualText,expText)

        })
        
      

    })

})