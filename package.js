Package.describe({
  summary: 'Simple package to use gravatar images',
  version: '0.0.4',
  git: 'https://github.com/p-j/meteor-gravatar.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('jparker:crypto-md5@3.1.2', ['client', 'server']);
  if(api.export)
    api.export('Gravatar');
  api.add_files('gravatar.js', ['client', 'server']);
});
