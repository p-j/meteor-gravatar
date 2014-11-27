Get Gravatar hashes / URLs for an email address

[![Build Status](https://travis-ci.org/p-j/meteor-gravatar.svg)](https://travis-ci.org/p-j/meteor-gravatar)

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

`cleanString(string)` : Remove starting and trailing whitespaces and lowercase the input string

`isHash(string)` : check if a string match the MD5 form : 32 chars string containing letters from `a` to `f` and digits from `0` to `9`

`hash(string)` : takes an input and run it through [`CryptoJS.MD5`](https://github.com/p-j/meteor-crypto-md5) to get the MD5 Hash back.

`imageUrl(string, object)` : will provide the url for the avatar, given an email or an md5 hash and a set of options to be passed to the [Gravatar API](https://en.gravatar.com/site/implement/images/).

See the [documented code](https://github.com/p-j/meteor-gravatar/blob/master/gravatar.js) for more details.

See the [test file](https://github.com/p-j/meteor-gravatar/blob/master/tests/tests.js) for more example of input -> output.

Example
-------

```javascript
var email = 'email@example.com';
var options = { 
    secure: true // choose between `http://www.gravatar.com` 
                 //            and `https://secure.gravatar.com`
                 //            default is `false`
}; 

var md5Hash = Gravatar.hash(email);
// 5658ffccee7f0ebfda2b226238b1eb6e

var url = Gravatar.imageUrl(email, options);
// https://secure.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e

var url2 = Gravatar.imageUrl(md5Hash, options);
// https://secure.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e
```

`options` may contain `key:value` representation of parameters to be added to the URL. For a list of parameters available, see [Gravatar's documentation](http://en.gravatar.com/site/implement/images/)

```javascript
// Example:
var url = Gravatar.imageUrl('email@example.com', {
    size: 34,
    default: 'mm'
});
// http://www.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e?size=34&default=mm
```

Credits
-------

Based on [Tom Coleman's work](https://github.com/tmeasday/meteor-gravatar)
