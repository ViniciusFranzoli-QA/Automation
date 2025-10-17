//Automação tem que acessar a página com login e senha informado.
describe('Teste de Login', () => {
  it('Login com Sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('vinicius-franzoli@hotmail.com')
    cy.get('[data-testid="senha"]').type('abc12345')
    cy.get('[data-testid="entrar"]').click()

 })
})