# express-letsencrypt-simple
Very simple route module for validating with Let's Encrypt

Usage
=====

Code
----

```javascript
const letsencrypt = require('express-letsencrypt-simple');
...
app.use('/.well-known', letsencrypt);
```

