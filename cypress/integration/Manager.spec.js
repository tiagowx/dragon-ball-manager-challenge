/// <reference types="cypress" />

context('Testing shenlong invocation', () => {
  before(() => {
    cy.visit('http://localhost:3000/dragon-ball-manager')
  })
  it('Renderiza falha ao invocar o Shenlog', () => {
    cy.get('[data-testid="card-shenlong"]').should('exist')
    cy.get('[data-testid="invoke-button"]').click()
    cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
    cy.get('[data-testid="back"]').click()
  })
  it('Renderiza sucesso ao invocar o Shenlog', () => {
    cy.get('[data-testid="card-shenlong"]').should('exist')
    for(let i = 0; i < 3; i++) {
      cy.contains('encontrei').click()
      cy.get('[name="ballcode"]').type('123')
      cy.contains('Validar').click()
    }

    cy.contains('Invocar').click()
    cy.get('[data-testid="invoke-button"]').should('exist')
    //cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
    //cy.get('[data-testid="back"]').click()
  })
})