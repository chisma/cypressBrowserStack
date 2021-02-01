const _ = require("lodash")

const languagesSupported = ["sv"]
context("Goto the b3 Innovation landing page and verify and verify menu options", function(){
    languagesSupported.forEach((lang) => {
        beforeEach(() => {
            cy.server()
            cy.fixture("urls").as("urls")
            cy.fixture("navBarMenus").as("navBarMenu")
        })
    
        it("Goto the landing page", function(){
            cy.visit(this.urls.primaryUrl)
            cy.acceptCookies()
        })
    
        it("Verify items on the navigation bar", function(){
            const expectedMenu = this.navBarMenu[lang]
            cy.get("#navBar").find("li").then((items) => {
                const actualMenu = _.map(items, (item) => item.innerText)
                expect(_.isEqual(actualMenu, expectedMenu)).to.be.true

            })
        })
    })
})
        

    
