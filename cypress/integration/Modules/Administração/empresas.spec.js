/// <reference types = "Cypress" />

import faker from '/node_modules/faker-br'


describe('Testes CRUD empresas', () => {

    beforeEach(() => {
        cy.authenticate()
    });


    it('Nova Empresa', () => {
        cy.newCompanyDefault()
    });

    // afterEach(() => {
    //     cy.logout()
    // });
});