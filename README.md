# Get Gravatar hashes / URLs for an email address

[![Build Status](https://travis-ci.org/p-j/meteor-gravatar.svg)](https://travis-ci.org/p-j/meteor-gravatar)

Dependencies
----------
- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)
- [`idorecall:email-normalize`]((https://github.com/iDoRecall/email-normalize))

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

To address this problem, the package will by default consider that sub-addresses of various types (e.g. `joe+tag@gmail.com`, `j.o.e@googlemail.com`) refer to the canonical email address, thanks to using  [`idorecall:email-normalize`](https://github.com/iDoRecall/email-normalize). If don't provide a default image in the options for `imageUrl`, it will return a URL with an automatically filled `d` option that would be the Gravatar of the canonical address.

In code:

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

* Based on [Tom Coleman's work](https://github.com/tmeasday/meteor-gravatar)
* [iDoRecall](https://idorecall.com) for the [email normalization package](https://github.com/iDoRecall/email-normalize)
