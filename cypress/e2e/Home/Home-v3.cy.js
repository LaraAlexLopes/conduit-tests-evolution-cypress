import { expectMessageToBe, navigateToRegisterPage, navigateToLoginPage } from '../Utils/HomeTestSupport';
describe('Home - V3: Fully abstracted tests using domain-specific actions', () => {
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
        expectMessageToBe('@sitetitle','conduit');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the subtitle "A place to share your knowledge."`, () => {
        expectMessageToBe('@pageSubtitle','A place to share your knowledge.');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Global Feed"`, () => {
        expectMessageToBe('@activeFeedTab',"Global Feed");
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading..."`, () => {
        expectMessageToBe('@articlessection','Loading...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Popular Tags"`, () => {
        expectMessageToBe('@sidebarTitle','Popular Tags');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading Tags"`, () => {
        expectMessageToBe('@sidebarLoading','Loading Tags...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the logo "conduit"`, () => {
        expectMessageToBe('@navbarlogo','conduit');
    })

    it(`Given the user clicks on the "Sign up" link in the navbar,
      Then they should be redirected to the Sign Up page,
      And see the text "Have an account?"`, () => {
        navigateToRegisterPage()
        expectMessageToBe('h1.text-xs-center','Sign Up');
        expectMessageToBe('p.text-xs-center > a[href="/login"]','Have an account?');
      })
    
      it(`Given the user clicks on the "Sign in" link in the navbar,
      Then they should be redirected to the Sign In page,
      And see the text "Need an account?"`, () => {
        navigateToLoginPage()
        expectMessageToBe('h1.text-xs-center','Sign In');
        expectMessageToBe('p.text-xs-center > a[href="/register"]','Need an account?');
      })
})