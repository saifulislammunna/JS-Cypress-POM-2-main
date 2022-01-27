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

it('Upload photo', function(){
    cy.get('[data-testid="identity-form-submit-button"]').click()  
    cy.get('a > .avatar').click()
    cy.get('.details-container > a').click()
    cy.get('.hide-on-drag-hover').selectFile('file.json', {
        action: 'drag-drop'
    })
})
 
