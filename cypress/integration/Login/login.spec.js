/// <reference types = "Cypress" />

context('Testes de login', () => {
    const USERNAME = ('augustomagalhaes@grupofortes.com.br')

    it('Login com sucesso', () => {
        cy.authenticate();
        cy.logout();
    });

    it('Senha inválida', () => {
        cy.authenticateTests(USERNAME,'123');
    });

    it('Senha vazia', () => {
        cy.authenticateTests(USERNAME, ' ');
        cy.messageError(' "Email" ou senha inválidos.');
    });

    it('Usuário não cadastrado', () => {
        cy.authenticateTests('aaaa', '123');                  
    });

    it('TesteAPILogin', () => {
        cy.authenticateAPI();
    });
    
});