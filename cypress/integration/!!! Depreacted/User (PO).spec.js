// /// <reference types = "Cypress" />
import { pagelogin } from '../../../../support/Pages/Login/PageLogin'
import { users } from '../../../../support/Pages/Administração/PageUser'

describe('Actions in CRUD Users', () => {
    const page_login = new pagelogin();
    const actions_users = new users();


    beforeEach(() => {
        page_login.navigate();
    });
    

context('CRUD Users', () => {
    it('User Exist', () => {
        
        page_login.authenticate();
        actions_users.userExist();

        // page_login.navigate();
        // page_login.loginOk();
        // cy.visit ('/usuarios');
        // cy.get ('button[title="F2"]').click();
        // cy.get ('input[type="email"]', {timeout : 10000}).should('be.visible');
        // cy.get ('input[type="email"]').type('augustomagalhaes@grupofortes.com.br');
        // cy.get ('input[id="contabil_0"]').check();
        // cy.get ('input[id="fiscal_0"]').check();
        // cy.get ('input[id="pessoal_0"]').check();
        // cy.contains('button','Salvar').click();
        // cy.contains ('Este usuário já encontra-se cadastrado.');
        // cy.visit('/logout');
        // cy.wait (5000);



    });

    it('User No Exist', () => {

        page_login.authenticate();
        actions_users.userNew();
        // cy.visit ('/login');
        // cy.get ('input[name="email"]').type('augustomagalhaes@grupofortes.com.br');
        // cy.get ('input[name="senha"]').type('12345abcd');
        // cy.get ('button[type="submit"]').click();
        // cy.get ('[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAACKklEQVRIS8VW0TUEQRCsigARIAJEgAxcBIgAETgRIAJEgAgQgROBEwEiaK/m9ezrG7Nub+/umZ97tzvbNV3dVT3EgpeZrQI4AfBB8lbhzewIwDqAa5JfesYF4wpk7CAC2Pf4TwB0oDHJzWUBK8vDloTuSCr7pWSswDctwAOSD52AzUyUrXigL5JrtaBmdgBgC4B+twG8AEjZARALuwBGAAQ8+lVjM9sgqTqpXhsA3gugtdwgZrZNUsG014p9m3/FmQA2s1yfIckLz+K+CJjoMrMhgHNlQ/K4AhwP+CuBBjiAZhxlrQ9qq3ynA98B2HOqRfkzgGP/WDXXuzen+jkBizIAr3NKK2Xomu3eXIG6PvhnJK88idnlFMSfwT8AnHo36pmYEYBcqClJNgUHzgby7fTqsWiXMuRmqXyZav1RXZLGfAlUXZssLi+3RHVyBD8g+ejAcigdVi4VLVMYV41lFjqNGI3YS+5bul3bWnVexmBFBnlPI4cKcE3faRvJTv7/r8DREuel+pukajx1RQORx0aXUnfutDSXNB/NZZD8lxz3mscVOQlcHSrH0VLnS04RtJmxhZy6zWMzE8DlVI7qG/oZiNPz2RM0f6ayjPpYZml1MpBoEvFc5TsNCJlPv3kcJtQFyWHHsZiuM3PNY2+OONwljbIEEwM+DPvyItBtHrfVt7DUVp06Oxoi+Qo0fR7P2VQTn8/cXIsCr9xkYuilXm+7z+NFZTvLPP4BQvxcLhdexhcAAAAASUVORK5CYII="]', { timeout: 10000 }).should('be.visible');
        // cy.get ('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAACKklEQVRIS8VW0TUEQRCsigARIAJEgAxcBIgAETgRIAJEgAgQgROBEwEiaK/m9ezrG7Nub+/umZ97tzvbNV3dVT3EgpeZrQI4AfBB8lbhzewIwDqAa5JfesYF4wpk7CAC2Pf4TwB0oDHJzWUBK8vDloTuSCr7pWSswDctwAOSD52AzUyUrXigL5JrtaBmdgBgC4B+twG8AEjZARALuwBGAAQ8+lVjM9sgqTqpXhsA3gugtdwgZrZNUsG014p9m3/FmQA2s1yfIckLz+K+CJjoMrMhgHNlQ/K4AhwP+CuBBjiAZhxlrQ9qq3ynA98B2HOqRfkzgGP/WDXXuzen+jkBizIAr3NKK2Xomu3eXIG6PvhnJK88idnlFMSfwT8AnHo36pmYEYBcqClJNgUHzgby7fTqsWiXMuRmqXyZav1RXZLGfAlUXZssLi+3RHVyBD8g+ejAcigdVi4VLVMYV41lFjqNGI3YS+5bul3bWnVexmBFBnlPI4cKcE3faRvJTv7/r8DREuel+pukajx1RQORx0aXUnfutDSXNB/NZZD8lxz3mscVOQlcHSrH0VLnS04RtJmxhZy6zWMzE8DlVI7qG/oZiNPz2RM0f6ayjPpYZml1MpBoEvFc5TsNCJlPv3kcJtQFyWHHsZiuM3PNY2+OONwljbIEEwM+DPvyItBtHrfVt7DUVp06Oxoi+Qo0fR7P2VQTn8/cXIsCr9xkYuilXm+7z+NFZTvLPP4BQvxcLhdexhcAAAAASUVORK5CYII="]').click();
        // cy.visit ('/usuarios');
        // cy.get ('button[title="F2"]').click();
        // cy.get ('[id="email"]', {timeout: 10000}).should('be.visible');
        // cy.get('input[id="email"]').type('augustomagalhaes@fortestecnologia.com.br');
        // cy.get ('input[id="contabil_0"]').check();
        // cy.get ('input[id="fiscal_0"]').check();
        // cy.get ('input[id="pessoal_0"]').check();
        // cy.contains ('button', 'Salvar').click();
        // cy.get ('input[placeholder="Filtrar"]').type('augustomagalhaes@fortestecnologia.com.br');
        // cy.contains ('augustomagalhaes@fortestecnologia.com.br').click();
        // cy.get ('button[title="F4"]').click();
        // cy.contains ('button', 'Sim').click();
        // cy.wait (5000);
        // cy.visit('/logout');

        });
    });

    afterEach(() => {
        page_login.logout();
    });
});