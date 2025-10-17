//CRIAR CADASTRO NO SITE
describe('Criacao de Cadastro', () => {
  it('Criar Cadastro', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Teste Automação')
    cy.get('[data-testid="email"]').type('Teste@hotmail.com')
    cy.get('[data-testid="password"]').type('Teste102030')
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()

    //Se exibir mensagem que o e-mail já está em uso
    cy.get('.alert > :nth-child(2)').contains ("Este email já está sendo usado")
    
    //irá limpar todos os formulários
    cy.get('[data-testid="nome"]').clear()
    cy.get('[data-testid="email"]').clear()
    cy.get('[data-testid="password"]').clear()

    //irá inserir novamente o nome.
    cy.get('[data-testid="nome"]').type('Teste Automação')
    //irá inserir um novo e-mail.
    cy.get('[data-testid="email"]').type('Abc1234@abc1234.com.br')
    //irá inserir novamente a senha
    cy.get('[data-testid="password"]').type('102030')
    
    //clicar em Entrar novamente    
    cy.get('[data-testid="cadastrar"]').click()

    //Se exibir mensagem que o e-mail já está em uso
    cy.get('.alert > :nth-child(2)').contains ("Cadastro realizado com sucesso")

  })
})