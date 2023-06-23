const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
import main from "../../page/mainpage";
const mainpage = new main()

Given('user is on main page', ()=>{
    cy.visit('https://www.saucedemo.com/')
})

When("user enters {string} and {string}",(id, password)=>{


})

Then('user should be able to login', ()=>{
    
})