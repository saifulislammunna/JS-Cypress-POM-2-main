it('Visits flickr.com', () => {
    cy.visit('https://identity.flickr.com/account-picker')
    cy.get('.py-2').click() 
})

 
it('login test', function(){
    const typedText = 'saifulmunna28@gmail.com'
    const typedPassword = '+P5*M,@cjPRz$Bm'  

     

     cy.get('[data-testid="identity-email-input"]')
     .type(typedText)
     .should('have.value', typedText)
     cy.get('[data-testid="identity-form-submit-button"]').click()  
     cy.get('[data-testid="identity-password-input"]') 
     .type(typedPassword)
     .should('have.value', typedPassword) 
   
      
     
})  
 
it('Photo search', function(){
    cy.get('[data-testid="identity-form-submit-button"]').click()  
    cy.get('#search-field').click()
    const typedText = 'Computer' 
    cy.get('#search-field')
    .type(typedText)
    .should('have.value', typedText)
    cy.get('.search-icon-button').click()

})

it('Photo like', function(){
        

      cy.get('.action').click({multiple: true,force: true})  
      .pause()
     /* cy.get('#yui_3_16_0_1_1643353528926_1739 > .engagement-icon > .icon > use').click({force: true}) */
      cy.get('.animated-fave-star').last().click({force: true})   
        
     

})
 