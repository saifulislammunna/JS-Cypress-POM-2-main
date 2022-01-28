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

it('Sign Out', function(){
    cy.get('[data-testid="identity-form-submit-button"]').click()  
    cy.get('#search-field').click()
    const typedText = 'Inorganic Chemistry' 
    cy.get('#search-field')
    .type(typedText)
    .should('have.value', typedText)
    cy.get('.search-icon-button').click()

})