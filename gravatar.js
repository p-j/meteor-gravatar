// super, super simple
Gravatar = {
  hash: function (email) {
    return CryptoJS.MD5(email.trim().toLowerCase());
  },

  imageUrl: function (email, options) {
    options = options || {};

    // Want HTTPS ?
    var url = options.secure ?
      'https://secure.gravatar.com/avatar/' :
      'http://www.gravatar.com/avatar/';

    // Gimme my avatar !
    url +=  Gravatar.hash(email);

    delete options.secure;

    // Have any options to pass ?
    var params = _.map(options, function (val, key) {
      return key + '=' + encodeURIComponent(val);
    }).join('&');

    if (params.length > 0) {
      url += '?' + params;
    }

    return url;
  }
};
