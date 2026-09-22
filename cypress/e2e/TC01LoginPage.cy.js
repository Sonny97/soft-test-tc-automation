describe('TC1LoginSuccessful', () => {
  it('Inicia sesión exitosamente y cierra sesión', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.get('#content').should(
      'contain.text',
      'Welcome to the Secure Area. When you are done click logout below.'
    );

    cy.get('a.button.secondary.radius').click();

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });

  it('TC2 InvalidUser', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('usuarioInvalido');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('TC3 InvalidPassword', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('claveInvalida');

    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});
