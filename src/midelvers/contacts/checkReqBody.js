const { AppError } = require('../../utils/index');

/**
 * Checking req.body for an empty object
 */
const checkReqBody = (req, res, next) => {
  const arr = Object.keys(req.body);

  if (arr.length === 0) return next(new AppError(400, 'missing fields'));

  next();
};

module.exports = {
  checkReqBody,
};
