/// <reference types="cypress" />  

// above reference is the intellisense and it shows suggestions when we are using the cypress

describe('CustomSuite', function ()
{
it('Project-Case', function ()
{

//Login and check the product
cy.visit('https://automationteststore.com')
cy.contains('Login or register').click()
cy.get('input[name=loginname]').type('singh')
cy.get('input[id=loginFrm_password]').type('singh')
cy.get('button[title=Login]').click()

cy.get('#categorymenu > nav > ul > li:nth-child(5) > a').click() 

        
        // View a product and title
        cy.get(':nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
        .click()
        .url().should('include', 'product_id=62')
      

        // Increase Quantity by 4 and add to cart
        cy.get('input#product_quantity').clear()
        cy.get('input#product_quantity').type('4')
        cy.contains('Add to Cart').click();


        // Click on shopping cart and checkout
        cy.get('#main_menu_top')
        .invoke('css', 'display', 'block')
        .find('.menu_text')
        .contains('Cart')
        .click()

        cy.title().should('eq', 'Shopping Cart')
        cy.get('#main_menu_top')
        .invoke('css', 'display', 'block')
        .find('.top.menu_checkout')
        .click()


        // Verify checkout confirmation and process order        
        cy.contains('Confirm Order').click()
        cy.get('#checkout_btn').click()
        cy.get('a[href="https://automationteststore.com/"][title="Continue"]').click()


        // Verify order 
        cy.get('div.menu_text').should('contain', 'Welcome back amrit').click()
        cy.get('.dash-tile-header:contains("Order history") .btn').click()


    })
})