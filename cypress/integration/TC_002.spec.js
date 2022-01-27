 it('Visits flickr.com', () => {
    cy.visit('https://www.flickr.com/')
})


  it('login test', function(){
    cy.visit('https://identity.flickr.com/login?redir=https%3A%2F%2Fwww.flickr.com%2F')
     
})  