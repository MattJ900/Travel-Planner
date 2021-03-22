const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll(
    );
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});




// GET a single reader
router.get('/:id', async (req, res) => {
  try {
    const readerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Location }, { model: Trip }],
      // TODO: Add a sequelize literal to get a count of short books
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});








router.post('/', async (req, res) => {
  try {
    const travellerData = await Traveller.create(req.body);
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const libraryCardData = await Traveller.destroy({
      where: {
        traveller_id: req.params.id,
      },
    });

    if (!libraryCardData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;