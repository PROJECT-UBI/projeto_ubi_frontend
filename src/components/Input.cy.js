import Input from './Input.vue';

describe('<Input />', () => {
  it('renders', () => {
    cy.mount(Input);
  });
  it('Input com label', () => {
    cy.mount(Input, {
      props: {
        label: 'Insira sua senha',
      },
    });
  });
  it('Insere valor no input', () => {
    cy.mount(Input);
    cy.get('.ubi-Input').type('Hello, World!');
  });
});
