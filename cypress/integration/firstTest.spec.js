/// <reference types="cypress" />

describe('Our first suite', () =>{

    it('first test', () =>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

         
        //By tag name
        cy.get('input')

        //by id
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="Email"]')

        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by tag name and attibute with value
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by tag name, attribute with value, ID and clas name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //the most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')


    })

})
