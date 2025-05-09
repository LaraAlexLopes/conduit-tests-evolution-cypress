import { clickElement, assertElementCondition} from '../Utils/Helpers';
describe('Home - V2: Modular tests using shared helper functions', () => {
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
        assertElementCondition('@sitetitle','have.text', 'conduit');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the subtitle "A place to share your knowledge."`, () => {
        assertElementCondition('@pageSubtitle','have.text', 'A place to share your knowledge.');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Global Feed"`, () => {
        assertElementCondition('@activeFeedTab','have.text', 'Global Feed');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading..."`, () => {
        assertElementCondition('@articlessection','have.text','Loading...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Popular Tags"`, () => {
        assertElementCondition('@sidebarTitle','have.text','Popular Tags');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading Tags"`, () => {
        assertElementCondition('@sidebarLoading','have.text','Loading Tags...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the logo "conduit"`, () => {
        assertElementCondition('@navbarlogo','have.text','conduit');
    })

    it(`Given the user clicks on the "Sign up" link in the navbar,
      Then they should be redirected to the Sign Up page,
      And see the text "Have an account?"`, () => {
        clickElement('a.nav-link[href="/register"]');
        assertElementCondition('h1.text-xs-center','have.text','Sign Up');
        assertElementCondition('p.text-xs-center > a[href="/login"]','have.text','Have an account?');
      })
    
      it(`Given the user clicks on the "Sign in" link in the navbar,
      Then they should be redirected to the Sign In page,
      And see the text "Need an account?"`, () => {
        clickElement('a.nav-link[href="/login"]');
        assertElementCondition('h1.text-xs-center','have.text','Sign In');
        assertElementCondition('p.text-xs-center > a[href="/register"]','have.text','Need an account?');
      })
  })