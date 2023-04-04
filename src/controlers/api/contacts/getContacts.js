const { catchWraper } = require('../../../utils/index');

const { User } = require('../../../models/contactModel');

/**
 * Get contacts
 */
const getControler = catchWraper(async (req, res) => {
  const contacts = await User.find({}).select('-__v');

  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts,
    },
  });
});

module.exports = {
  getControler,
};
