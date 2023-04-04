const { catchWraper } = require('../../../utils/index');

const { User } = require('../../../models/contactModel');
/**
 * Get contact by ID
 */
const getByIdControler = catchWraper(async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await User.findById(contactId).select('-__v');

  res.json({
    status: 'success',
    code: 200,
    data: {
      contact,
    },
  });
});

module.exports = {
  getByIdControler,
};
