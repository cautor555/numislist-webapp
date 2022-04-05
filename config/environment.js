'use strict';

module.exports = function (environment) {
  let ENV = {
    contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
      // ... other stuff here
      'font-src': "'self' http://localhost:4200",
    },
    modulePrefix: 'numislist-webapp',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // usingCors: true,
      // corsWithCreds: false,
      // apiURL: null
    },
  };

  // ENV['simple-auth'] = {
  //   authorizer:'simple-auth-authorizer:access-token'
  // };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  // ENV['ember-simple-auth'] = {
  //   authenticationRoute: '/login',
  // };

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
  }

  return ENV;
};
