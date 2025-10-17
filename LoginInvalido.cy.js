describe('Teste de Login', () => {
  it('Email e/ou senha inválidos', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('testeabc@teste.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()

    cy.get('.alert').contains ("Email e/ou senha inválidos")

  })
})