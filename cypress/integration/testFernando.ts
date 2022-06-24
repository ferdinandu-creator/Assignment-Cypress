
describe('Start here', () => {
  beforeEach(() => {
    cy.login(Cypress.env('AUTH_USERNAME'), Cypress.env('AUTH_PASSWORD'));

  });

  it('go to showroom', () => {
    cy.visit('?skip_browser_check=true');
  });

   it('contains url', () => {
      cy.url()
        .should('include', '/home')
        });
   it('create New Presentation', () => {
     cy.get('.AppSelectionsc__StyledAppSelectionList-sc-crqgqq-1').click()
     cy.get('[data-testid="createNewPresentation"]').click()
     cy.url()
        .should("include", "/presentation/create")
    });

   it('create presentation Name', () => {
    cy.get('#presentationName')
      .type("fernando")
      .should("have.value", "fernando")
    });

   it('welcomeMessage', () => {
    cy.get('#welcomeMessage')
      .type("Welcome fernando")
      .should("have.value", "Welcome fernando")
    });

   it('presentation based on', () => {
    cy.get(':nth-child(3) > .FieldLabelsc__StyledFieldLabel-sc-1be16qd-0')
      .contains('Customer')
      .click()
    });

   it('select costumerTye', () => {
        cy.get('[data-testid="customerSearchBoxList"] > :nth-child(1) > :nth-child(1)')
        cy.contains('South')
          .click()
        });


   it('select Products and Assests Catalog', () => {
        cy.get(':nth-child(5) > .DropdownMenusc__StyledDropdownMenuContent-sc-1gvbwbj-0 > .DropdownTriggersc__StyledDropdownTrigger-sc-ih66vr-0')
          .contains('Select Season')
          .click()

        });

   it('Select Season', () => {
        cy.get(':nth-child(5) > .DropdownMenusc__StyledDropdownMenuContent-sc-1gvbwbj-0 > .DropdownTriggersc__StyledDropdownTrigger-sc-ih66vr-0')
           .click()
           .get('[style="will-change: transform; transform: translateY(0px); max-height: calc(26rem);"] > [data-testid="dropdown-list"] > :nth-child(1)')
           .click()
        });

    it('create presentation button', () => {
        cy.get('.Navbarsc__StyledRightArea-sc-7hz6vn-1 > .ClickableItemsGroupsc__StyledClickableItemsGroup-sc-124pekp-0 > .ClickableItemsc__StyledClickableItem-sc-jvfv9r-0')
          .click()
          .should('have.text','Create Presentation')
         });

    it('presentation created', () => {
        cy.url()
         .should('include', '/presentation/PRESENTATION')
         });

         it('click menu', () => {
           cy.get('[data-testid="presentationMenuButton"]')
             .click()
         });

        it('exit presentation', () => {
           cy.get('.lpilgN > :nth-child(3)')
             .contains("Exit Presentation")
             .click()
         });

         it('select All', () => {
          cy.contains("Presentations")
             .click()
             .get('[style="will-change: transform; transform: translateY(0px); max-height: calc(26rem);"] > [data-testid="dropdown-list"] > .zSiws')
             .contains("All")
             .click()
         });

          it('search bot', () => {
                 cy.get('[data-testid="icon-Search"] > svg')
                    .click()
                    .get('[data-testid="catalogSearchInput"]')

                    .type("bot")
                    .should("have.value", "bot")
                  });

            it('search numbers of bot', () => {
                    cy.server()

                   cy.fixture('bot.json').then(  file => {
                    const numberOfBoots = file.data.presentations.total
                   cy.route('POST', '**/presentation*','file')
                   })

                   cy.get('[data-testid="presentationList"]').then (listOfItem => {
                   expect(listOfItem[0]).to.contain ('numberOfBoots')

                       })

                  });


});

