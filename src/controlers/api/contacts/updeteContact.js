const { catchWraper } = require('../../../utils/index');

const { User } = require('../../../models/contactModel');

/**
 * Updete contact
 */
const updeteControler = catchWraper(async (req, res, next) => {
  const { contactId } = req.params;
  const { email, name, phone } = req.body;

  const newContact = await User.findOneAndUpdate(
    contactId,
    {
      name,
      phone,
      email,
    },
    { new: true }
  ).select('-__v');

  res.status(200).json({ message: newContact });
});

module.exports = {
  updeteControler,
};
