const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const tripData = await Trip.findAll({
      include: [{ model: Traveller }],
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;