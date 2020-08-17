/* jshint ignore:start */
Package.describe({
    name: 'TTClib:chain3',
    version: '0.1.22',
    summary: 'TTC JavaScript API, middleware to talk to a TTC node over RPC test version',
    git: 'https://github.com/titanttc/chain3',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({
    "xmlhttprequest": "1.7.0"
});


Package.onUse(function(api) {
    api.versionsFrom('1.0.3.2');
    api.export(['Chain3', 'BigNumber'], ['client', 'server']);
    api.addFiles('dist/chain3.js', ['client', 'server']);
    api.addFiles('package-init.js', ['client', 'server']);

});

/* jshint ignore:end */
