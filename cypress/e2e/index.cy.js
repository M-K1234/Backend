
describe('Index page', () => {
   
  beforeEach(() => {
    cy.visit('/')
  })


  it('can fetch person data', () => {
    cy.get('#submitBtn').click()
    cy.get('#firstname').should('have.length.greaterThan', 0)
    cy.get('#lastname').should('have.length.greaterThan', 0)
    cy.get('#gender').should('have.length.greaterThan', 0)

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log('Error was this: '+ err)
      return false;
    })
  })

  it('can fetch person data for several people', () => {
    cy.get('#selection').select('/persons')
    cy.get('#quantity').select('3')
    cy.get('#submitBtn').click()
    
    cy.intercept('GET', 'http://localhost:3000/persons/3',(req)=> {
      cy.log( req)
    })
    

    Cypress.on('uncaught:exception', (err, runnable) => {
      cy.log(err)
      return false;
    })
  })
})