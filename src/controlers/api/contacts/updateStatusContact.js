const { catchWraper } = require('../../../utils/index');

const { User } = require('../../../models/contactModel');

/**
 * Update status contact
 */
const updateStatusContact = catchWraper(async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const updateFavorite = await User.findOneAndUpdate(
    contactId,
    {
      favorite,
    },
    { new: true }
  ).select('-__v');

  res.status(200).json({ data: updateFavorite });
});

module.exports = {
  updateStatusContact,
};
