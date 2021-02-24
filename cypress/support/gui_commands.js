import Chance from '/node_modules/chance'
let chance = new Chance()

import faker from '/node_modules/faker-br'

// Elementos em comum

Cypress.Commands.add('buttonConfirm', () => {
    cy.get('.modal-footer > .btn-primary').click()
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
        //     cy.get('input[name = "email"]').should('be.visible').clear().type(Cypress.env('username'))
        //     cy.get('input[type = "password"]').clear().type(Cypress.env('password'))
        //     cy.get('button[type = "submit"]').click()
        //     cy.validateAuthentication()
        // }

    cy.get('input[name = "email"]').should('be.visible').clear().type(Cypress.env('username'))
    cy.get('input[type = "password"]').clear().type(Cypress.env('password'))
    cy.get('button[type = "submit"]').click()
    cy.validateAuthentication()
})

//TODO Fazer esse IF funcionar

Cypress.Commands.add('validateAuthentication', () => {
        cy.get('.panel-body').should('not.exist')
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: center;"] > div > :nth-child(1)').should('be.visible')
})

Cypress.Commands.add('authenticateTests', (login,password) => {
    cy.visit('/login')
    cy.get('input[name = "email"]').should('be.visible').clear().type(login)
    cy.get('input[type = "password"]').clear().type(password)
    cy.get('button[type = "submit"]').click()
})

Cypress.Commands.add('messageError', (message) => {
    cy.get('.alert').should('has.text', message)
})

Cypress.Commands.add('logout', () => {
    cy.visit('/logout')
    cy.get('.inicial-box > figure > img').should('be.visible')
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
    cy.visit('/usuarios')
    cy.get(btNovoUsuario).click()
    cy.get('input[type="email"]').should('be.visible').clear().type(novoEmail)
    cy.get('input[id="contabil_0"]').check()
    cy.get('input[id="fiscal_0"]').check()
    cy.get('input[id="pessoal_0"]').check()
    cy.buttonConfirm()
})

Cypress.Commands.add('deleteUser', () => {
    cy.visit('/usuarios')
    cy.get('input[placeholder="Filtrar"]').should('be.visible').clear().type(novoEmail)
    cy.contains(novoEmail).click()
    cy.get(btDeletarUsuario).click()
    cy.buttonConfirm()
    cy.filterUser(novoEmail)
    cy.get('.ag-center-cols-viewport').should('not.contain', novoEmail)
})

Cypress.Commands.add('filterUser', (filtrarEmail) => {
    cy.get('input[placeholder="Filtrar"]').clear().type(filtrarEmail, '{enter}')

})


// ------------------------------------------------------------------------------

// Empresas

// ------------------------------------------------------------------------------


const btEditarEmpresa = ('[title="F3"]')
const btExcluirEmpresa = ('.btn-danger')
const btQuadroSocietario = ('.hbox-gap > :nth-child(5)')
const btCompartilharEmpresa = ('.hbox-gap > :nth-child(4)')

Cypress.Commands.add('newCompany', () => {
    cy.visit('/empresas')
    cy.get('.btn-primary').click()
});


Cypress.Commands.add('fillCompany', (cnpj, denSocial, nFantasia, iniAtivid, cbIniAtiv, iniPrimExerc, cbIniPrimExerc,
    regTrib, desFolha, contador, contIss, contICMS, contIPI, municip) => {
    cy.get('input[name="cnpjRaiz"]').type(cnpj)  
    cy.get('input[name="denominacaoSocial"]').clear().type(denSocial)
    cy.get('input[name="nome"]').clear().type(nFantasia)
    cy.get('input[name="inicioDeAtividade"]').clear().type(iniAtivid)
    cy.get(':nth-child(5) > .field-group-fields > :nth-child(2) > .lookup > div > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + cbIniAtiv + ') > div').should('be.visible').click()
    cy.get('input[name="inicioDoPrimeiroExercicio"]').clear().type(iniPrimExerc)
    cy.get(':nth-child(6) > .field-group-fields > :nth-child(2) > .lookup > div > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + cbIniPrimExerc + ') > div').should('be.visible').click()                                      
    cy.get('[style="width: 150px;"] > .lookup > div > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + regTrib + ') > div').should('be.visible').click()
    cy.get(':nth-child(8) > .lookup > div > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + desFolha + ') > div').should('be.visible').click()
    cy.get(':nth-child(10) > .lookup > [style="display: inline-block; width: 100%; position: relative;"] > .lookup-arrow > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + contador + ') > div').should('be.visible').click()
    cy.get('[style="width: 126px;"] > .lookup > div > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + contIss + ') > div').should('be.visible').click()
    cy.get('[style="width: 138px;"] > .lookup > div > .fa').should('be.visible').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + contICMS + ') > div').should('be.visible').click()
    cy.get('[style="width: 121px;"] > .lookup > div > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + contIPI + ') > div').should('be.visible').click()
    cy.get('[style="width: 214px;"] > .lookup > [style="display: inline-block; width: 100%; position: relative;"] > .lookup-arrow > .fa').should('be.visible').click()
    cy.get('.lookup-container > :nth-child(' + municip + ') > div').should('be.visible').click()

})

Cypress.Commands.add('newCompanyDefault', () => {
    cy.newCompany();
    cy.fillCompany(
        faker.br.cnpj(), chance.company(), chance.company() + ' TestCase', '01012020', 1, '01022020', 1, 4, 2, 1, 1, 3, 3, 5)
});


