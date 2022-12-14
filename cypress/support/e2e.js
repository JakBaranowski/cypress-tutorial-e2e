// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import "@shelex/cypress-allure-plugin";

const moment = require("moment");
const addContext = require("mochawesome/addContext");
 
beforeEach(function () {
    cy.log("Test run started on : " + new moment().format("DD-MM-YYYY HH:mm:ss"));
});
 
// Runs after a test completes
Cypress.on("test:after:run", (test, runnable) => {
    cy.log("Test run ended on : " + new moment().format("DD-MM-YYYY HH:mm:ss"));

    const spec_title = runnable.parent.title;

    console.log("spec_title :", spec_title);
    console.log("test.state  :", test.state);
    console.log("Cypress.spec.name  :", Cypress.spec.name);
    console.log("test.title  :", test.title);
    if (test.state === "failed") {
        addContext(
            { test },
            {
            title:
                "Failing Screenshot: " +
                ">> screenshots/" +
                Cypress.spec.name +
                "/" +
                spec_title +
                " -- " +
                test.title +
                " (failed)" +
                ".png <<",
            value:
                "screenshots/" +
                Cypress.spec.name +
                "/" +
                spec_title +
                " -- " +
                test.title +
                " (failed)" +
                ".png",
            }
        );
    }
});
