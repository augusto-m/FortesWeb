const url_login = '/login'
const url_logout = '/logout'
const email = ('input[name = "email"]')
const password = ('input[type = "password"]')
const button_login = ('button[type = "submit"]')
const modules = ('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAACKklEQVRIS8VW0TUEQRCsigARIAJEgAxcBIgAETgRIAJEgAgQgROBEwEiaK/m9ezrG7Nub+/umZ97tzvbNV3dVT3EgpeZrQI4AfBB8lbhzewIwDqAa5JfesYF4wpk7CAC2Pf4TwB0oDHJzWUBK8vDloTuSCr7pWSswDctwAOSD52AzUyUrXigL5JrtaBmdgBgC4B+twG8AEjZARALuwBGAAQ8+lVjM9sgqTqpXhsA3gugtdwgZrZNUsG014p9m3/FmQA2s1yfIckLz+K+CJjoMrMhgHNlQ/K4AhwP+CuBBjiAZhxlrQ9qq3ynA98B2HOqRfkzgGP/WDXXuzen+jkBizIAr3NKK2Xomu3eXIG6PvhnJK88idnlFMSfwT8AnHo36pmYEYBcqClJNgUHzgby7fTqsWiXMuRmqXyZav1RXZLGfAlUXZssLi+3RHVyBD8g+ejAcigdVi4VLVMYV41lFjqNGI3YS+5bul3bWnVexmBFBnlPI4cKcE3faRvJTv7/r8DREuel+pukajx1RQORx0aXUnfutDSXNB/NZZD8lxz3mscVOQlcHSrH0VLnS04RtJmxhZy6zWMzE8DlVI7qG/oZiNPz2RM0f6ayjPpYZml1MpBoEvFc5TsNCJlPv3kcJtQFyWHHsZiuM3PNY2+OONwljbIEEwM+DPvyItBtHrfVt7DUVp06Oxoi+Qo0fR7P2VQTn8/cXIsCr9xkYuilXm+7z+NFZTvLPP4BQvxcLhdexhcAAAAASUVORK5CYII="]')
const user_login = Cypress.env('username')
const user_password = Cypress.env('password')


export class pagelogin {

    navigate() {
        cy.visit(url_login);

    }


    authenticate() {
        cy.get (email).should('be.visible').clear().type(user_login);
        cy.get (password).clear().type(user_password);
        cy.get (button_login).click();
        cy.get('.panel-body').should('not.exist');
        cy.get(':nth-child(4) > img').should('be.visible');
        cy.contains('Administração');
    }

    loginTest(login, pass) {
        cy.get (email).should('be.visible').clear().type(login);
        cy.get (password).clear().type(pass);
        cy.get (button_login).click();
        cy.get (button_login).should('be.visible');
    }

    logout() {
        cy.visit(url_logout);
        cy.get('.inicial-box > figure > img').should('be.visible');
    }

}