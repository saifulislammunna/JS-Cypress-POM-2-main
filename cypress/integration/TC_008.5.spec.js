import '../integration/TC_008.2.spec'
 
it('Photo Share', function(){
   
    /* cy.get('.cancel').click({multiple: true,force: true})  */
    cy.get('.overlay').first().click({force: true})
    /* cy.contains('https://www.flickr.com/photos/flickr/23013522853/') */
     cy.get('.cancel').click({multiple: true,force: true})  
    
  /*   <a class="overlay" href="/photos/flickr/23013522853/" tabindex="0" role="heading" aria-level="3" aria-label="Throwback Thursday: Telecommunication by Flickr" id="yui_3_16_0_1_1643373777624_48170"></a> */
 
      
     

})