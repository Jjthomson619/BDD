const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");

Given('user is on home page', ()=>{

    cy.visit('https://www.saucedemo.com/')
})

When('user enters the credentials',()=>{

    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
    cy.log("this rms")
})

Then('user logs in', ()=>{
    cy.get('.title').should('be.visible')
})