const router = require('express').Router();
const traveller = require('./traveller');
const location = require('./libraryCardRoutes');

router.use('/traveller', traveller);
router.use('/location', location);

module.exports = router;
