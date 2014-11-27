/* jshint ignore:start */
Package.describe({
	summary: 'Simple package to use gravatar images',
	version: '0.3.1',
	git: 'https://github.com/p-j/meteor-gravatar.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.1.1');

	api.use('jparker:crypto-md5@0.1.1', ['client', 'server']);

	if (api.export) {
		api.export('Gravatar');
	}
	api.addFiles('gravatar.js', ['client', 'server']);
});

Package.onTest(function(api) {
	api.use([
		'jparker:crypto-md5@0.1.1',
		'jparker:gravatar@0.3.0',
		'tinytest'
	], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});
/* jshint ignore:end */
