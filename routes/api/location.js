const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll({
      include: [{ model: Traveller }],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;