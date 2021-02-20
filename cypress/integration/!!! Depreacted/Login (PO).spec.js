import { pagelogin } from '../../support/Pages/Login/PageLogin'


describe('Testes Login', () => {
    const auth = new pagelogin();

    beforeEach(() => {
        auth.navigate();
    });

    it('Email No Exist', () => {
        
        auth.loginTest('aaaa', ' ');
        cy.get('.alert').should('has.text',' Email inválido');
    });

    it('Password Error', () => {

        auth.loginTest ('augustomagalhaes@grupofortes.com.br', '111');
        cy.get('.alert').should('has.text',' "Email" ou senha inválidos.');
    });

    afterEach(() => {
        auth.logout();
    });
    
});