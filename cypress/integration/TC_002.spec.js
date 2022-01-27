 
 it('Visits flickr.com', () => {
    cy.visit('https://www.flickr.com/')
})


  it('login test', function(){
    const typedText = 'saifulmunna28@gmail.com'
    const typedPassword = '+P5*M,@cjPRz$Bm'  

    cy.visit('https://identity.flickr.com/login?redir=https%3A%2F%2Fwww.flickr.com%2F')

     cy.get('[data-testid="identity-email-input"]')
     .type(typedText)
     .should('have.value', typedText)
     cy.get('[data-testid="identity-form-submit-button"]').click()  
     cy.get('[data-testid="identity-password-input"]') 
     .type(typedPassword)
     .should('have.value', typedPassword) 
       cy.get('[data-testid="identity-form-submit-button"]').click()  
      
     
})  