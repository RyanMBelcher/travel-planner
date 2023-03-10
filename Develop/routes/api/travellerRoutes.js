const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// TODO: GET all travellers
router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: GET a single traveller
router.get('/:id', async (req, res) => {

});

// TODO: CREATE a traveller
router.post('/', async (req, res) => {

});

// TODO: DELETE a traveller
router.delete('/:id', async (req, res) => {

});

module.exports = router;
