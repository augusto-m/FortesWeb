

describe('Testes de Usuários', () => {
    
    beforeEach(() => {
       cy.authenticate();
    });


    it('Novo Usuário', () => {
        cy.newUser();
        cy.deleteUser();
    });

    it('Excluir Usuário', () => {
        cy.newUser();
        cy.deleteUser();
    });


    it.skip('Novo Usuário API', () => {
        cy.getIDUSer()
        .then(idUser => {
            cy.request ({
                url: 'https://c1-homologacao.fortesweb.com.br/usuarios/compartilhar_empresas/compartilhar.json',
                method: 'POST',
                headers: {'x-usuario-id': 192},
                body: {
                    usuario_email: '"augustomagalhaes@fortestecnologia.com.br"',
                    empresas: 'contabil: true, fiscal: true, pessoal: true',
                    }
                }
            ).then(response =>
                (console.log(response)) 
            )           
        })
    });

     afterEach(() => {
         cy.logout();
     });
 });