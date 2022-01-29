 
 it('Visits flickr.com', () => {
    cy.visit('https://www.flickr.com/')
})

  it('SignUp test', function(){
    const typedFirstName = 'Saiful Islam'
    const typedLastName = 'Munna'
    const typedAge = 23
    const typedEmail = 'saifulmunna28@gmail.com'
    const typedPassword = '+P5*M,@cjPRz$Bm'  

    cy.get('.gn-signup > .gn-title').click()
      
    cy.get('.input-container > [data-testid="identity-first-name-input"]')
    .type(typedFirstName)
    .should('have.value', typedFirstName)

    cy.get('.input-container > [data-testid="identity-last-name-input"]')
    .type(typedLastName)
    .should('have.value', typedLastName)

    cy.get('[data-testid="no-test-id-given"]')
    .type(typedAge)
    .should('have.value', typedAge)

     cy.get('[data-testid="identity-email-input"]')
     .type(typedEmail)
     .should('have.value', typedEmail)
       
     cy.get('[data-testid="identity-password-input"]') 
     .type(typedPassword)
     .should('have.value', typedPassword)
     
     cy.get('iframe')
    
     .check({ force: true })
      .should('be.checked') 
      /* .and('have.attr') */   
      /* .recaptcha-checkbox-border */  
      /* cy.get('[data-testid="identity-form-submit-button"]').click();  */ 
      
     /*  '[type="checkbox"]' */
})   