/// <reference types = "Cypress" />

describe('Testes CRUD empresas', () => {

    beforeEach(() => {
        cy.authenticate()
    });


    it('Criar Empresa', () => {
        cy.newCompanyDefault()
    });

    it('Deletar Empresa', () => {
        cy.deleteCompanyDefault()
    });

    afterEach(() => {
        cy.logout()
    });
});