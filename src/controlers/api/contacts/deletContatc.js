const { catchWraper } = require('../../../utils/index');

const { User } = require('../../../models/contactModel');

/**
 * Delete contact
 */
const deleteControler = catchWraper(async (req, res, next) => {
  const { contactId } = req.params;

  await User.findByIdAndDelete(contactId);

  res.json({
    masege: 'contact deleted',
    code: 200,
  });
});

module.exports = {
  deleteControler,
};
