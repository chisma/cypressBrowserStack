const sv_SE = require("../../locales/sv_SE.json")
Cypress.Commands.add("acceptCookies", function(){
    cy.get("button").contains(sv_SE.cookieMessage).click().should(() => {
        expect(localStorage.getItem("isCookiesAccepted")).to.eq('true')
    })

})