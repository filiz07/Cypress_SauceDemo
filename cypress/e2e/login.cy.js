describe('Sauce Demo', ()=>{

it('Login_rightdata1',()=>{

cy.visit('https://www.saucedemo.com/')
//cy.url.should('include' , 'www.saucedemo.com')

cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()
cy.get('.title').should('be.visible')


})

it('Login_rightdata_2' , ()=>{

cy.visit('https://www.saucedemo.com/')
cy.get('[data-test="username"]').type('problem_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()
cy.get('.title').should('be.visible')


})

it('Login_rightData_3' , ()=>{

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('be.visible')

})

it('Login_wrongData' , ()=>{

cy.visit('https://www.saucedemo.com/')
cy.get('[data-test="username"]').type('locked_out_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()
cy.get('[data-test="error"]').should('be.visible')



})








})