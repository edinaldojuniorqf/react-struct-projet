describe('Primeiros testes com cypress', () => {
  it('Teste de sanidade', () => {
    expect(true).to.equal(true)
  })

  it('Visita um site', () => {
    cy.visit('https://example.cypress.io')
    cy.pause()
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('eqzfjunior@gmail.com')
      .should('have.value', 'eqzfjunior@gmail.com')
  })
})