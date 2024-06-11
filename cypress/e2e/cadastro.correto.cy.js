describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos de formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/n');
    cy.get('.header__home').click();
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Gabriel Russon');
    cy.get('[data-test="input-email"]').type('russongabriel@gmail.com');
    cy.get('[data-test="input-password"]').type('Teste@123');
    cy.get('[data-test="input-confirm-password"]').type('Teste@123');
    cy.contains('button', 'Cadastrar').click();
  })
})