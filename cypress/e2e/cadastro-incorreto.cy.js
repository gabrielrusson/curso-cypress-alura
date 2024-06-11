describe('Pagina de Cadastro', () => {
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
      cy.visit('cadastro');
      cy.get('.header__home').click();
      cy.get('[data-test="register-button"]').click();
      cy.contains('button', 'Cadastrar').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })
  })