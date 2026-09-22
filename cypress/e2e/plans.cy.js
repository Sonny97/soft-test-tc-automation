describe('TC4 Validar precio de planes', () => {
  it('Valida el precio mostrado en cada plan', () => {
    cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top');

    cy.contains('.et_pb_pricing_table', 'Free Trial').should('contain.text', '$0/month');
    cy.contains('.et_pb_pricing_table', 'Basic').should('contain.text', '$80/month');
    cy.contains('.et_pb_pricing_table', 'Enterprise').should('contain.text', '$900/month');
  });
});

describe('TC5 Afirmar CSS Tipo de fuente', () => {
  it('Valida que el titulo h1 tenga el font-family esperado', () => {
    cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top');

    cy.get('h1').should(
      'have.css',
      'font-family',
      '"Nunito Sans", Helvetica, Arial, Lucida, sans-serif'
    );
  });
});

describe('TC6 Afirmar clase para el botón', () => {
  it('Valida que el botón Purchase tenga las clases esperadas', () => {
    cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top');

    cy.contains('a', 'Purchase')
      .first()
      .should('have.class', 'et_pb_button')
      .and('have.class', 'et_pb_pricing_table_button');
  });
});

describe('TC7 Afirmar titulo y url de la pagina', () => {
  it('Valida el titulo y la url de la pagina', () => {
    cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top');

    cy.title().should('eq', 'Fake pricing page | Ultimate QA');
    cy.url().should('eq', 'https://ultimateqa.com/automation/fake-pricing-page/#top');
  });
});
