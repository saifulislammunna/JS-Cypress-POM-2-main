import '../integration/TC_008.2.spec'
 
it('Photo Share', function(){
   
    /* cy.get('.cancel').click({multiple: true,force: true})  */
    cy.get('.share-button').click()
      cy.get('.cancel').click({multiple: true,force: true})  
    
  
 
      
     

})
 