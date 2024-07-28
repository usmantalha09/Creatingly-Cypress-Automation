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

// Cypress.Commands.add('switchToIfram', () => {
//     return cy
//         .get("iframe[title='reCAPTCHA']")
//         .eq(0)
//         // .its("0.document.body")
//         // .should("not.be.empty")
//         .then(cy.wrap);
        
//   });





Cypress.Commands.add('switchToIframe', (iframeSelector) => { cy.get(iframeSelector) .should('be.visible') .and(($iframe) => { 
    // Make sure the iframe is fully loaded
    expect($iframe.contents().find('body')).to.exist; }) .then(($iframe) => { 
        // Wrap the body of the iframe to enable further chaining
        return cy.wrap($iframe.contents().find('body')); }); });



        


//   Cypress.Commands.add('switchToIframe', () => { return cy
//      .get("iframe") .eq(0) .then($iframe => { 
//         // Ensure the iframe is loaded
//         const contentDocument = $iframe[0].contentDocument; 
//         const contentWindow = $iframe[0].contentWindow; 
//         if (contentDocument && contentWindow) 
//             { return new Cypress.Promise((resolve) => { const checkIframeContent = () => { 
//                 if (contentDocument.body && contentDocument.readyState === 'complete') { resolve(cy.wrap(contentDocument.body)); } 
//                 else { setTimeout(checkIframeContent, 100); } }; checkIframeContent(); }); } 
//         else { throw new Error('Could not get iframe contentDocument or contentWindow'); } }); });

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