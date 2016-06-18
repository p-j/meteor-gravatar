# Get Gravatar hashes / URLs for an email address

[![Build Status](https://travis-ci.org/p-j/meteor-gravatar.svg)](https://travis-ci.org/p-j/meteor-gravatar)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/p-j/meteor-gravatar.svg)](http://isitmaintained.com/project/p-j/meteor-gravatar "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/p-j/meteor-gravatar.svg)](http://isitmaintained.com/project/p-j/meteor-gravatar "Percentage of issues still open")
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://github.com/p-j/meteor-gravatar/blob/master/LICENSE)

Dependencies
----------
- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)

Install
-------

Inside your project folder run
```
$ meteor add jparker:gravatar
```

Usage
-----

The following methods under the `Gravatar` namespace will be available
on **both the client and server**:

* `cleanString(string)`: Remove starting and trailing whitespaces and lowercase the input string

* `isHash(string)`: check if a string matches the MD5 format: 32 chars string containing letters from `a` to `f` and digits from `0` to `9`

* `hash(string)`: takes an input and runs it through [`CryptoJS.MD5`](https://github.com/p-j/meteor-crypto-md5) to get the MD5 hash back.

* `imageUrl(string, object)`: computes the URL for the avatar, given an email or an MD5 hash and a set of options to be passed to the [Gravatar API](https://en.gravatar.com/site/implement/images/).

See the [documented code](https://github.com/p-j/meteor-gravatar/blob/master/gravatar.js) for more details.

See the [test file](https://github.com/p-j/meteor-gravatar/blob/master/tests/tests.js) for more examples of input -> output.

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

`options` may contain `key:value` pairs of parameters to be added to the URL. For a list of parameters available, see [Gravatar's documentation](http://en.gravatar.com/site/implement/images/)

```javascript
// Example:
var url = Gravatar.imageUrl('email@example.com', {
    size: 34,
    default: 'mm'
});
// http://www.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e?size=34&default=mm
```

## Normalizing email addresses

Some users prefer to include [address tags](https://en.wikipedia.org/wiki/Email_address#Sub-addressing) in their email when they sign up for services - for example `joe+games@gmail.com`, or `joe+thisnewservice@fastmail.com`. Most of the time they won't bother setting a gravatar for the new email address, so you'd normally get a palceholder image or 404 from Gravatar.

To address this problem, you can look at [`idorecall:email-normalize`](https://github.com/iDoRecall/email-normalize).

> Previously this was included but as `email-normalize` seems to be unmaintained I decided to drop the dependency and give full controll back to the developer. I believe a package like this one should do one thing well and one thing only.

Credits
-------

* Based on [Tom Coleman's work](https://github.com/tmeasday/meteor-gravatar)
