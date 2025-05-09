describe('Home - V1: Structured tests using aliases and beforeEach setup', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('h1.logo-font').as('sitetitle');
        cy.get('div.container > p').as('pageSubtitle');
        cy.get('ul.nav.nav-pills.outline-active > li.nav-item a.nav-link.active[href]').as('activeFeedTab');
        cy.get('div.article-preview').as('articlessection');
        cy.get('div.sidebar > p').as('sidebarTitle');
        cy.get('div.sidebar > div').as('sidebarLoading');
        cy.get('a.navbar-brand').as('navbarlogo');
    });
    
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the logo with text "conduit"`, () => {
      cy
        .get('@sitetitle')
        .should('have.text', 'conduit');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the subtitle "A place to share your knowledge."`, () => {
        cy
        .get('@pageSubtitle')
        .should('have.text', 'A place to share your knowledge.');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Global Feed"`, () => {
        cy
        .get('@activeFeedTab')
        .should('have.text', 'Global Feed');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading..."`, () => {
        cy
        .get('@articlessection')
        .should('have.text', 'Loading...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Popular Tags"`, () => {
        cy
        .get('@sidebarTitle')
        .should('have.text', 'Popular Tags');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading Tags"`, () => {
        cy
        .get('@sidebarLoading')
        .should('have.text', 'Loading Tags...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the logo "conduit"`, () => {
        cy
        .get('@navbarlogo')
        .should('have.text', 'conduit');
    })

    it(`Given the user clicks on the "Sign up" link in the navbar,
      Then they should be redirected to the Sign Up page,
      And see the text "Have an account?"`, () => {
        cy
          .get('a.nav-link[href="/register"]')
          .click()
          .get('h1.text-xs-center')
          .should('have.text','Sign Up')
          .get('p.text-xs-center > a[href="/login"]')
          .should('have.text', "Have an account?");
      })
    
      it(`Given the user clicks on the "Sign in" link in the navbar,
      Then they should be redirected to the Sign In page,
      And see the text "Need an account?"`, () => {
        cy
          .get('a.nav-link[href="/login"]')
          .click()
          .get('h1.text-xs-center')
          .should('have.text', 'Sign In')
          .get('p.text-xs-center a[href="/register"]')
          .should('have.text', 'Need an account?');
      })
  })