# hasInternetConnection
A Node.js convenience module for determining if the user is connected to the internet or not.

## Getting Started 

1. Require the module `hasInternetConnection `

  ```var hasInternetConnection = require('hasInternetConnection')```

2. Call the module, by provide it with a callback with two parameters: an error, and a boolean stating whether there is an active internet connection or not.


**Example**

```javascript

var hasInternetConnection = require('hasInternetConnection');

hasInternetConnection(function(err, connection) {
  if (connection) {
    console.log('yay there is internetz!');
  } else {
    console.log('uh oh no internetz', err);
  }
});


