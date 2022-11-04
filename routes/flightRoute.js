const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/flights', controller.getFlights)
router.get('/flights/:id', controller.getSingleFlight)
router.post('/flights', controller.createFlights)
router.put('/flights/:id', controller.updateFlights)
router.delete('/flights/:id', controller.deleteFlights)


module.exports = router ;

