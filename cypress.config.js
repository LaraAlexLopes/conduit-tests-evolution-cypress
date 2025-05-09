const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4100',
    setupNodeEvents(on, config) {
    },
  },
});
