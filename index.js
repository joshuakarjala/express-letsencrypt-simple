const router = require('express').Router();

router.get('/acme-challenge/' + process.env.LETSENCRYPT_CHALLENGE || '', function (req, res, next) {
  res.send(process.env.LETSENCRYPT_RESPONSE || '');
});

module.exports = router;
