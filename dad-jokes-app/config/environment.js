'use strict';

module.exports = function(environment) {
  let ENV = {
    // contentSecurityPolicy: {'connect-src': "'self' wss://*.firebaseio.com"},
    firebase: {
      apiKey: "FIREBASE_KEY",
      authDomain: "dad-jokes-61ccf.firebaseapp.com",
      databaseURL: "https://dad-jokes-61ccf.firebaseio.com",
      projectId: "dad-jokes-61ccf",
      storageBucket: "dad-jokes-61ccf.appspot.com",
      messagingSenderId: "308473676899",
      appId: "1:308473676899:web:562f104e298eeb3cdaa456"
    },
    modulePrefix: 'dad-jokes-app',
    environment: 'production',
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.rootURL = '/dad-jokes-app';
  }

  return ENV;
};
