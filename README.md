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

This package also include [`idorecall:email-normalize`](https://github.com/iDoRecall/email-normalize) 
This means that by default, if you provide a sub-address as a parameter and no default image in the options for `imageUrl`, it will return a url with an automatically filled `d` option that would be the gravatar with the standard address.

In code :

```javascript
var originalEmail = 'test+test@gmail.com';
var normalizedEmail = Email.normalize(originalEmail);
// test@gmail.com

Gravatar.hash(originalEmail);
// d093205fcb0a6ff09ad450636db8f05e

Gravatar.hash(normalizedEmail);
// 1aedb8d9dc4751e229a335e371db8058

var url = Gravatar.imageUrl(originalEmail);
// http://www.gravatar.com/avatar/d093205fcb0a6ff09ad450636db8f05e?d=http%3A%2F%2Fwww.gravatar.com%2Favatar%2F1aedb8d9dc4751e229a335e371db8058
```

Credits
-------

Based on [Tom Coleman's work](https://github.com/tmeasday/meteor-gravatar)
