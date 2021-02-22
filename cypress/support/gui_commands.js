let Chance = require ('chance')
let chance = new Chance()


// Elementos em comum

Cypress.Commands.add('buttonConfirm', () => {
    cy.get('.modal-footer > .btn-primary').click();
})


// ------------------------------------------------------------------------------

// Login

// ------------------------------------------------------------------------------

const login = (Cypress.env('username'))
const password = (Cypress.env('password'))

Cypress.Commands.add('authenticate', () => {
    cy.visit('/login')

        // if(cy.get('.modal-title').lenght = 0) {
        // cy.get('.modal-footer > .btn').click()
        // }
        // else {
        //     cy.get('input[name = "email"]').should('be.visible').clear().type(Cypress.env('username'));
        //     cy.get('input[type = "password"]').clear().type(Cypress.env('password'));
        //     cy.get('button[type = "submit"]').click();
        //     cy.validateAuthentication();
        // }

    cy.get('input[name = "email"]').should('be.visible').clear().type(Cypress.env('username'));
    cy.get('input[type = "password"]').clear().type(Cypress.env('password'));
    cy.get('button[type = "submit"]').click();
    cy.validateAuthentication();
})

//TODO Fazer esse IF funcionar

Cypress.Commands.add('validateAuthentication', () => {
        cy.get('.panel-body').should('not.exist');
        cy.get('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAACKklEQVRIS8VW0TUEQRCsigARIAJEgAxcBIgAETgRIAJEgAgQgROBEwEiaK/m9ezrG7Nub+/umZ97tzvbNV3dVT3EgpeZrQI4AfBB8lbhzewIwDqAa5JfesYF4wpk7CAC2Pf4TwB0oDHJzWUBK8vDloTuSCr7pWSswDctwAOSD52AzUyUrXigL5JrtaBmdgBgC4B+twG8AEjZARALuwBGAAQ8+lVjM9sgqTqpXhsA3gugtdwgZrZNUsG014p9m3/FmQA2s1yfIckLz+K+CJjoMrMhgHNlQ/K4AhwP+CuBBjiAZhxlrQ9qq3ynA98B2HOqRfkzgGP/WDXXuzen+jkBizIAr3NKK2Xomu3eXIG6PvhnJK88idnlFMSfwT8AnHo36pmYEYBcqClJNgUHzgby7fTqsWiXMuRmqXyZav1RXZLGfAlUXZssLi+3RHVyBD8g+ejAcigdVi4VLVMYV41lFjqNGI3YS+5bul3bWnVexmBFBnlPI4cKcE3faRvJTv7/r8DREuel+pukajx1RQORx0aXUnfutDSXNB/NZZD8lxz3mscVOQlcHSrH0VLnS04RtJmxhZy6zWMzE8DlVI7qG/oZiNPz2RM0f6ayjPpYZml1MpBoEvFc5TsNCJlPv3kcJtQFyWHHsZiuM3PNY2+OONwljbIEEwM+DPvyItBtHrfVt7DUVp06Oxoi+Qo0fR7P2VQTn8/cXIsCr9xkYuilXm+7z+NFZTvLPP4BQvxcLhdexhcAAAAASUVORK5CYII="]').should('be.visible');
})

Cypress.Commands.add('authenticateTests', (login,password) => {
    cy.visit('/login');
    cy.get('input[name = "email"]').should('be.visible').clear().type(login);
    cy.get('input[type = "password"]').clear().type(password);
    cy.get('button[type = "submit"]').click();
})

Cypress.Commands.add('messageError', (message) => {
    cy.get('.alert').should('has.text', message)
})

Cypress.Commands.add('logout', () => {
    cy.visit('/logout');
    cy.get('.inicial-box > figure > img').should('be.visible');
})

Cypress.Commands.add('authenticateAPI', () => {
    cy.request({
        method: 'POST',
        url: 'https://c1-homologacao.fortesweb.com.br//sessao/login.json',
        body: {
            email: (Cypress.env('username')),
            senha: (Cypress.env('password'))
        }
        })
        .then(response => (console.log(response)))
        .then(response => (
            expect(response.body['id']).eq(192)
    ))
})

//TODO Entender pq 'its' não consegue validar duas propriedades em seguida. Setando variável, talvez ?


Cypress.Commands.add('getIDUSer', () => {
    cy.request({
        method: 'POST',
        url: 'https://c1-homologacao.fortesweb.com.br//sessao/login.json',
        body: {
            email: (Cypress.env('username')),
            senha: (Cypress.env('password'))
        }
    })
        .then(response => (console.log(response)))
        .then(idUser => {
            return idUser
        })
})
    

// ------------------------------------------------------------------------------

// Usuários

// ------------------------------------------------------------------------------

const novoEmail = ('augustomagalhaes@fortestecnologia.com.br')
const btNovoUsuario = ('button[title="F2"]')
const btDeletarUsuario = ('button[title="F4"]')

Cypress.Commands.add('newUser', () => {
    cy.visit('/usuarios');
    cy.get(btNovoUsuario).click();
    cy.get('input[type="email"]').should('be.visible').clear().type(novoEmail);
    cy.get('input[id="contabil_0"]').check();
    cy.get('input[id="fiscal_0"]').check();
    cy.get('input[id="pessoal_0"]').check();
    cy.buttonConfirm();
})

Cypress.Commands.add('deleteUser', () => {
    cy.visit('/usuarios');
    cy.get('input[placeholder="Filtrar"]').should('be.visible').clear().type(novoEmail);
    cy.contains(novoEmail).click();
    cy.get(btDeletarUsuario).click();
    cy.buttonConfirm();
    cy.filterUser(novoEmail);
    cy.get('.ag-center-cols-viewport').should('not.contain', novoEmail);
})

Cypress.Commands.add('filterUser', (filtrarEmail) => {
    cy.get('input[placeholder="Filtrar"]').clear().type(filtrarEmail, '{enter}');

})


// ------------------------------------------------------------------------------

// Empresas

// ------------------------------------------------------------------------------

const btNovaEmpresa = ('.btn-primary')
const btEditarEmpresa = ('[title="F3"]')
const btExcluirEmpresa = ('.btn-danger')
const btQuadroSocietario = ('.hbox-gap > :nth-child(5)')
const btCompartilharEmpresa = ('.hbox-gap > :nth-child(4)')

// const CNPJ_ROOT = ('input[type="text"]')
// const SOCIAL_DENOMINATION = ('input[name="denominacaoSocial"]')
// const FANTASY_NAME = ('input[name="denominacaoSocial"]')
// const DATE_START_ACTIVITY = ('input[name="inicioDeAtividade"]')
// const COMBO_START_ACTIVITY = ('input[name="inicioDeAtividadePorCisaoOuFusao"]')
// const DATE_START_FIRST_EXERCISE = ('input[name="inicioDoPrimeiroExercicio"]')
// const COMBO_START_FIRST_EXERCISE = (':nth-child(6) > .field-group-fields > :nth-child(2) > .lookup > div > .form-control')
// const COMBO_TAX_REGIME = ('input[name="regimeDeTributacao"]')
// const COMBO_FRILL_EXCEPTION = ('input[name="tributacaoPrevidenciaria"]')
// const COMBO_AUDIT = ('[style="width: 80px;"] > .lookup > div > .form-control')
// const COMBO_ACCOUNTANT = ('input[name="contabilista"]')

Cypress.Commands.add ('newCompanie', () => {
    cy.visit('/empresas')
    cy.get(btNovaEmpresa).click()
    cy.get('input[name="denominacaoSocial"]').type('EmpresaTeste')
    cy.get('input[name="nome"]').type(chance.company())
    cy.get('input[name="inicioDeAtividade"]').type(chance.date({string: true}))
    cy.get('input[name="inicioDeAtividadePorCisaoOuFusao"]').select('por Cisão/Fusão')

})