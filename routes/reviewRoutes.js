const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/hostaway', reviewController.getHostawayReviews);

router.get('/test', (req, res) => res.json({ status: 'OK' }));

module.exports = router;