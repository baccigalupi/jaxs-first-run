/// <reference types="cypress" />

context('First time rendering and routes', () => {
  it('renders the home page', () => {
    cy.visit('http://localhost:4000')
      .get('h1')
      .should('contain', 'Hey now, hey now!')
  })

  it('uses location state to change the dom', () => {
    cy.visit('http://localhost:4000')
      .get('.nav-tabs .nav-link')
      .first()
      .should('have.class', 'active')
  })

  it('renders other pages with bound location state', () => {
    cy.visit('http://localhost:4000/counter')
      .get('h1')
      .should('contain', 'Let\'s increment something')

    cy.get('.nav-tabs .nav-link.active')
      .should('contain', 'State change')
  })

  it('uses fuzzy route matching', () => {
    cy.visit('http://localhost:4000/users/12')
      .get('h1')
      .should('contain', 'User details')
  })
})
