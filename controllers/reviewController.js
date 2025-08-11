const hostawayService = require('../services/hostawayService');

async function getHostawayReviews(req, res, next) {
  try {
    // 1. Input Validation (recommended)
    const { listingName, minRating, channel } = req.query;
    
    // Basic validation example (customize as needed)
    if (minRating && isNaN(minRating)) {
      return res.status(400).json({ 
        status: 'error',
        message: 'minRating must be a number' 
      });
    }

    // 2. Construct filters object (sanitized)
    const filters = {
      ...(listingName && { listingName: String(listingName).trim() }),
      ...(minRating && { minRating: parseInt(minRating) }),
      ...(channel && { channel: String(channel).trim() })
    };

    // 3. Service call with error handling
    const data = await hostawayService.getHostawayReviews(filters);
    
    // 4. Success response
    res.json({
      status: 'success',
      data: data  // Explicitly nest data for consistency
    });

  } catch (err) {
    // 5. Error handling
    console.error('[HostawayController] Error:', err);
    next(err);  // Forward to Express error handler
  }
}

module.exports = {
  getHostawayReviews
};