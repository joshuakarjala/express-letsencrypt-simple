# express-letsencrypt-simple
Very simple route module for validating with Let's Encrypt

Usage
=====
Provide the follow environment variables - `LETSENCRYPT_CHALLENGE` and `LETSENCRYPT_RESPONSE`. 

You can get these values by running certbot in manual mode
`sudo certbot certonly --manual`

After following the wizard you should get to a point where it outputs this in the console:

```
Make sure your web server displays the following content at
http://app.wiik.li/.well-known/acme-challenge/<LETSENCRYPT_CHALLENGE> before continuing:

<LETSENCRYPT_RESPONSE>
```

Code
----

```javascript
const letsencrypt = require('express-letsencrypt-simple');
...
app.use('/.well-known', letsencrypt);
```

