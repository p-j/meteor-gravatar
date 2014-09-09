Get Gravatar hashes / URLs for an email address

Dependency
----------
- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5).

Install
-------

Inside your project folder run
```
$ meteor add jparker:gravatar
```

Usage
-----

The following method under the `Gravatar` namespace will now be available
on **both the client and server**:

```javascript
var email = 'email@example.com';
var options = { 
    secure: true // choose between `http://` and `https://` protocol
}; 

var md5Hash = Gravatar.hash(email);
// 5658ffccee7f0ebfda2b226238b1eb6e
var url = Gravatar.imageUrl(email, options);
// https://www.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e
```