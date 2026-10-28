/// <reference types="cypress" />

describe('Testes da Agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve incluir um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Breno Teste')
    cy.get('input[placeholder="E-mail"]').type('breno.teste@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11999998888')
    cy.contains('button', /adicionar/i).click()

    cy.contains('Breno Teste').should('be.visible')
    cy.contains('breno.teste@ebac.com.br').should('be.visible')
    cy.contains('11999998888').should('be.visible')
  })

  it('Deve alterar um contato', () => {
    cy.contains('button', /editar/i).first().click()

    cy.get('input[placeholder="Nome"]').clear().type('Nome Alterado')
    cy.contains('button', /salvar/i).click()

    cy.contains('Nome Alterado').should('be.visible')
    cy.contains('gian Souza').should('not.exist')
  })

  it('Deve remover um contato', () => {
    cy.contains('gian Souza').should('be.visible')

    cy.contains('button', /deletar/i).first().click()

    cy.contains('gian Souza').should('not.exist')
  })
})
