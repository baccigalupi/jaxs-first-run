/// <reference types="cypress" />

context('Rerendering on state change', () => {
  it('changes pages via the tab links', () => {
    cy.visit('http://localhost:4000')
      .get('h1')
      .should('contain', 'Hey now, hey now!')

    cy.get('a.nav-link[href="/counter"]')
      .click()
    cy.url().should('include', '/counter')
    cy.get('h1')
      .should('contain', 'Let\'s increment something')

    cy.get('a.nav-link[href="/sign-in"]')
      .click()
    cy.url().should('include', '/sign-in')
    cy.get('h1')
      .should('contain', 'Sign in')

    cy.get('a.nav-link[href="/users/42"]')
      .click()
    cy.url().should('include', '/users')
    cy.get('h1')
      .should('contain', 'User details')
  })

  it('changes page data with click events', () => {
    cy.visit('http://localhost:4000/counter')
      .get('h1')
      .should('contain', 'Let\'s increment something')

    cy.get('.counter-value')
      .contains('0')

    cy.get('button.increment')
      .click()

    cy.get('.counter-value')
      .contains('1')

    cy.get('button.decrement')
      .click()

    cy.get('.counter-value')
      .contains('0')
  })
})
