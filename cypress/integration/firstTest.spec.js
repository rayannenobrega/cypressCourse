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

    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

    })

    it.only('then and wrap method', () =>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain','Password')


        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')

        //Selenium Style
        // const firstForm = cy.contains('nb-card', 'Using the Grid')
        // const secondForm = cy.contains('nb-card', 'Basic form')

        // firstForm.find('[for="inputEmail1"]').should('contain','Email')
        // secondForm.find('[for="exampleInputEmail1"]').should('contain','Email address')


        //cypress style
       
        cy.contains('nb-card', 'Using the Grid').then(firstForm =>{
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passrwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passrwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm =>{
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passrwordLabelFirst).to.equal(passwordLabelSecond)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password')
            })

        })

    })

})
