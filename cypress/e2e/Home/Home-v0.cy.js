describe('Home - V0: Direct tests without abstraction or aliasing', () => {
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the logo with text "conduit"`, () => {
      cy
        .visit('/')
        .get('h1.logo-font')
        .should('have.text', 'conduit');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the subtitle "A place to share your knowledge."`, () => {
        cy
        .visit('/')
        .get('div.container > p')
        .should('have.text', 'A place to share your knowledge.');
    })
  
    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Global Feed"`, () => {
        cy
        .visit('/')
        .get('ul.nav.nav-pills.outline-active > li.nav-item a.nav-link.active[href]')
        .should('have.text', 'Global Feed');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading..."`, () => {
        cy
        .visit('/')
        .get('div.article-preview')
        .should('have.text', 'Loading...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Popular Tags"`, () => {
        cy
        .visit('/')
        .get('div.sidebar > p')
        .should('have.text', 'Popular Tags');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the message "Loading Tags"`, () => {
        cy
        .visit('/')
        .get('div.sidebar > div')
        .should('have.text', 'Loading Tags...');
    })

    it(`Given the user accesses the home page,
      When the page loads,
      Then they should see the logo "conduit"`, () => {
        cy
        .visit('/')
        .get('a.navbar-brand')
        .should('have.text', 'conduit');
    })

    it(`Given the user clicks on the "Sign up" link in the navbar,
      Then they should be redirected to the Sign Up page,
      And see the text "Have an account?"`, () => {
        cy
          .visit('/')
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
          .visit('/')
          .get('a.nav-link[href="/login"]')
          .click()
          .get('h1.text-xs-center')
          .should('have.text', 'Sign In')
          .get('p.text-xs-center a[href="/register"]')
          .should('have.text', 'Need an account?');
      })
  })