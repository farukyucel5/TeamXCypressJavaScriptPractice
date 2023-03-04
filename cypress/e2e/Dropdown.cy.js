
describe('handle dropdowns^',()=>{
    beforeEach(()=>{
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
        
    });

    it.skip('dropdown',()=>{
        
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country').
        select('Italy').should('have.value','Italy')

     })


     it.skip('bootstrap dropdowns ',()=>{
        
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Italy')


        

     })

     it('Auto suggest dropdowns',()=>{
        
        cy.visit("https://www.wikipedia.org")
        cy.get("#searchLanguage").select("English")
      
        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()

        

     })

     it('Dynamic dropdowns',()=>{
        
        cy.visit("https://www.google.com/")
      
        cy.get('[name="q"]').type('cypress automation')

        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
            if($el.text()=='cypress automation tutorial'){
                cy.wrap($el)
                $el.click()
            }
        })


        cy.get('[name="q"]').should('have.value','cypress automation tutorial')
        

     })
})