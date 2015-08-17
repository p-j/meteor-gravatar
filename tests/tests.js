/* global Tinytest, Gravatar */
Tinytest.add('Gravatar - isHash', function(t) {
	t.isFalse(Gravatar.isHash('github@jeremie-parker.com'), '`isHash` should return `false` when given `github@jeremie-parker.com`');
	t.isTrue(Gravatar.isHash('77a6c4bd6a73a5780698778e7692461d'), '`isHash` should return `true` when given 77a6c4bd6a73a5780698778e7692461d');
});

Tinytest.add('Gravatar - cleanString', function(t) {
	t.equal(
		Gravatar.cleanString('  gitHub@JEREMIE-parker.com  '),
		'github@jeremie-parker.com'
	);
	t.equal(
		Gravatar.cleanString('77A6C4BD6A73A5780698778E7692461D'),
		'77a6c4bd6a73a5780698778e7692461d'
	);
});

Tinytest.add('Gravatar - hash', function(t) {
	t.equal(
		Gravatar.hash('github@jeremie-parker.com'),
		'77a6c4bd6a73a5780698778e7692461d'
	);
});

Tinytest.add('Gravatar - imageUrl', function(t) {
	t.equal(
		Gravatar.imageUrl('77a6c4bd6a73a5780698778e7692461d'),
		'http://www.gravatar.com/avatar/77a6c4bd6a73a5780698778e7692461d'
	);

	t.equal(
		Gravatar.imageUrl('github@jeremie-parker.com'),
		'http://www.gravatar.com/avatar/77a6c4bd6a73a5780698778e7692461d'
	);

	t.equal(
		Gravatar.imageUrl('github@jeremie-parker.com', {
			secure: true
		}),
		'https://secure.gravatar.com/avatar/77a6c4bd6a73a5780698778e7692461d'
	);

	t.equal(
		Gravatar.imageUrl('github@jeremie-parker.com', {
			size: 34,
			default: 'mm'
		}),
		'http://www.gravatar.com/avatar/77a6c4bd6a73a5780698778e7692461d?size=34&default=mm'
	);

	t.equal(
		Gravatar.imageUrl('test+test@gmail.com', {
			d: 'https://avatars1.githubusercontent.com/u/1537324?v=3&s=96'
		}),
		'http://www.gravatar.com/avatar/d093205fcb0a6ff09ad450636db8f05e?d=' + encodeURIComponent('https://avatars1.githubusercontent.com/u/1537324?v=3&s=96')
	)

	t.equal(
		Gravatar.imageUrl('test+test@gmail.com'),
		'http://www.gravatar.com/avatar/d093205fcb0a6ff09ad450636db8f05e?d=' + encodeURIComponent('http://www.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058')
	)
});
