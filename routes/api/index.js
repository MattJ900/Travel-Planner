const router = require('express').Router();
const traveller = require('./traveller');
const location = require('./location');
const trip = require('./trip');

router.use('/traveller', traveller);
router.use('/location', location);
router.use('/trip', trip);

module.exports = router;
