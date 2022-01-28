 
import '../integration/TC_008.5.spec' 

it('Download The Photo', function(){
   
    cy.get('.download').click()  
   
    cy.get('.cancel').click({multiple: true,force: true})    
    
  
 
      
     

})