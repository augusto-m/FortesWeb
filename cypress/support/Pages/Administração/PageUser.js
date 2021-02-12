const url_user = ('/usuarios')
const button_new = ('button[title="F2"]')
const field_email_user = ('input[type="email"]')
const email_exist = ('augustomagalhaes@grupofortes.com.br')
const email_new = ('augustomagalhaes@fortestecnologia.com.br')
const check_contabil = ('input[id="contabil_0"]')
const check_fiscal = ('input[id="fiscal_0"]')
const check_pessoal = ('input[id="pessoal_0"]')
const filter_user = ('input[placeholder="Filtrar"]')
const button_delete = ('button[title="F4"]')
const button_confirm = ('button', 'Sim')
const button_save = ('button','Salvar')

export class users {
    
    userExist () {
        cy.visit (url_user);
        cy.pause;
        cy.get (button_new).click();
        cy.get (field_email_user).should('be.visible').clear().type(email_exist);
        cy.contains (button_save).click();
    }


    userNew () {

        cy.visit(url_user);
        cy.get (button_new).click();
        cy.get (field_email_user).should('be.visible').clear().type(email_new);;
        cy.get (check_contabil).check();
        cy.get (check_fiscal).check();
        cy.get (check_pessoal).check();
        cy.contains (button_save).click();
        cy.get (filter_user).clear().type(email_new);
        cy.contains (email_new).click();
        cy.get (button_delete).click();
        cy.contains (button_confirm).click();
        cy.get (filter_user).should('be.visible').clear().type(email_new);
        cy.get (filter_user).type('{enter}');
        cy.wait(2000);
        cy.contains(email_new).should('not.exist');

    }
}

