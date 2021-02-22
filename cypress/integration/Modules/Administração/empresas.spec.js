/// <reference types = "Cypress" />

describe('Testes CRUD empresas', () => {

    beforeEach(() => {
        cy.authenticate()
    });


    it('Nova Empresa', () => {
        cy.newCompanie()
    });
});