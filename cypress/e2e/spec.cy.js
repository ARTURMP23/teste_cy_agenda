///<reference types="cypress"/>

describe('Teste de funcionalidades da agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve ser possível adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Novo Contato')
    cy.get('input[placeholder="E-mail"]').type('novocontato@example.com')
    cy.get('input[placeholder="Telefone"]').type('123456789')
    cy.get('button[type="submit"]').click()
    cy.contains('Novo Contato').should('exist')
  })

  it('Deve ser possível alterar um contato existente', () => {
    cy.get('.contato').last().within(() => {
      cy.get('.edit').click()
    })
    cy.get('input[placeholder="Nome"]').clear().type('Contato Alterado')
    cy.get('input[placeholder="E-mail"]').clear().type('contatoalterado@example.com')
    cy.get('input[placeholder="Telefone"]').clear().type('987654321')
    cy.get('button[type="submit"]').click()
    cy.contains('Contato Alterado').should('exist')
  })

  it('Deve ser possível remover um contato existente', () => {
    cy.get('.contato').last().within(() => {
      cy.get('.delete').click()
    })
    cy.get('.contato').should('have.length', 3)
  })
})