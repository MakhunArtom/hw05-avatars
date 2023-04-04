const { catchWraper } = require('../../../utils/index');

const { User } = require('../../../models/contactModel');

/**
 * Create contact
 */
const createControler = catchWraper(async (req, res) => {
  const newContact = await User.create(req.body);

  res.status(201).json({
    status: 'created',
    data: { newContact },
  });
});

module.exports = {
  createControler,
};
