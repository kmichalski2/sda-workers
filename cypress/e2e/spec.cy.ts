const baseUrl = 'http://localhost:5173/';

describe('home page', () => {
  it('should be default set to polish language', () => {
    cy.visit(baseUrl);

    cy.get('h1').contains('Pracownicy');
  })

  it('should change language to english', () => {
    cy.visit(baseUrl)

    cy.get('[data-testid="language-selector"]').select("en");

    cy.get('h1').contains('Employees');
  })

  it('should add employee', () => {
    cy.visit(baseUrl);

    cy.getByTestId('add-button').click();

    cy.get('#firstname').type('Kamil');
    cy.get('#lastname').type('Nowak');
    cy.get('#birthdate').type('1.1.2000');
    cy.get('#address').type('Warszawska 20');
    cy.get('#city').type('Katowice');
    cy.get('#postalcode').type('40-000');
    cy.get('#phonenumber').type('444555666');
    cy.get('#salary').type('10000');

    cy.get('[type="submit"]').click();

    cy.contains('Kamil');
    cy.contains('Nowak');
  });
})