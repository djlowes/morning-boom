const credentials = require('../../config');
const express = require('express');
const TokenProvider = require('../../lib/tokenprovider');

const router = express.Router();
const tokenProvider = new TokenProvider(credentials.cfg);

if (credentials.cfg.authToken) {
  console.warn('WARNING: The "authToken" field is deprecated. Please use "signingKeySecret".');
}

if (credentials.cfg.instanceSid) {
  console.warn('WARNING: The "instanceSid" field is deprecated. Please use "serviceSid".');
}

router.get('/getToken', function(req, res) {
  const identity = req.query && req.query.identity;
  const endpointId = req.query && req.query.endpointId;
  console.log("get token")

  if (!identity || !endpointId) {
    res.status(400).send('getToken requires both an Identity and an Endpoint ID');
  }

  const token = tokenProvider.getToken(identity, endpointId);
  res.send(token);
});

module.exports = router;
