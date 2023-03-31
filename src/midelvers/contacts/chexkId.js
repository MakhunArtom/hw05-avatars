const { AppError, catchWraper } = require('../../utils/index');
const { User } = require('../../models/contactModel');
const { Types } = require('mongoose');

/**
 * Checking contacts by id
 */
const chexkId = catchWraper(async (req, res, next) => {
  const { contactId } = req.params;

  const idIsValid = await Types.ObjectId.isValid(contactId);

  if (!idIsValid) return next(new AppError(404, 'Contact not exsist'));

  const idExists = await User.exists({ _id: contactId });

  if (!idExists) return next(new AppError(404, 'Contact not exsist'));
  next();
});

module.exports = {
  chexkId,
};
