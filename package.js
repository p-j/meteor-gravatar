/* jshint ignore:start */
Package.describe({
	name: 'jparker:gravatar',
	summary: 'Simple package to use gravatar images',
	version: '0.4.1',
	documentation: 'README.md',
	git: 'https://github.com/p-j/meteor-gravatar.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.1.1');

	api.use('underscore@1.0.3', ['client', 'server']);
	api.use('jparker:crypto-md5@0.1.1', ['client', 'server']);
	api.use('idorecall:email-normalize@1.0.0', ['client', 'server']);

	if (api.export) {
		api.export('Gravatar');
	}
	api.addFiles('gravatar.js', ['client', 'server']);
});

Package.onTest(function(api) {
	api.use([
		'jparker:crypto-md5@0.1.1',
		'jparker:gravatar@0.4.0',
		'idorecall:email-normalize@1.0.0',
		'tinytest'
	], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});
/* jshint ignore:end */
