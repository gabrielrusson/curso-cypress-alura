describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('login');
    });

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.login('russongabriel@gmail.com', 'Teste@123');
        cy.get('[data-test="submit-button"]').click();
        cy.get(':nth-child(1) > h4').should('have.text', 'Dunga');
    })
})
