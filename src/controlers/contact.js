const { catchWraper } = require('../utils/index');

const { User } = require('../models/contactModel');

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

/**
 * Create contact
 */
const createControler = catchWraper(async (req, res) => {
  const newContact = await User.create(req.body).select('-__v');

  res.status(201).json({
    status: 'created',
    data: { newContact },
  });
});

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
  getControler,
  getByIdControler,
  createControler,
  deleteControler,
  updeteControler,
};
