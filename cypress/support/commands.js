// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("preencherFormularioTicketbox", (firstName, lastName, email) => {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#email').type(email);
    cy.get('#friend').click();
    cy.get('#requests').type("Non laboris consequat ipsum ea amet reprehenderit in. Pariatur exercitation consequat labore nulla ad nostrud labore excepteur fugiat eu. Sunt anim nulla anim velit duis dolore esse ex consequat Lorem. Magna magna qui nisi cillum minim consequat sint dolore nisi qui et sint magna. Dolore excepteur excepteur proident eiusmod irure laboris et adipisicing esse nisi do sint labore.", {delay: 0});
    cy.get('#agree').click();
    cy.get('#signature').type(`As. ${firstName}`);
})

Cypress.Commands.add("preencherFormularioCacTac", (firstName, lastName, email) => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#email').type(email);
    cy.get('#phone').type('83999887766');
    cy.get('#product').select(3);
    cy.get('#email-checkbox').click();
    cy.get('#open-text-area').type("Non laboris consequat ipsum ea amet reprehenderit in. Pariatur exercitation consequat labore nulla ad nostrud labore excepteur fugiat eu. Sunt anim nulla anim velit duis dolore esse ex consequat Lorem. Magna magna qui nisi cillum minim consequat sint dolore nisi qui et sint magna. Dolore excepteur excepteur proident eiusmod irure laboris et adipisicing esse nisi do sint labore.", {delay: 0});
    cy.get('#file-upload').selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'testfile.txt',
        mimeType: 'text/plain',
        lastModified: Date.now(),
    });
})
