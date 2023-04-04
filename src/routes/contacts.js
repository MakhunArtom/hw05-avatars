const { Router } = require('express');

const {
  checkExistFavorite,
  checkReqBody,
  chexkId,
  createContactValidator,
  updeteContactValidator,
} = require('../midelvers/index');

const { apiContacts } = require('../controlers/index');

const {
  getControler,
  getByIdControler,
  createControler,
  deleteControler,
  updeteControler,
  updateStatusContact,
} = apiContacts;

const router = Router();

router.route('/').get(getControler).post(checkReqBody, createContactValidator, createControler);

router.use('/:contactId', chexkId);
router
  .route('/:contactId')
  .get(getByIdControler)
  .delete(deleteControler)
  .put(checkReqBody, updeteContactValidator, updeteControler);

router.route('/:contactId/favorite').patch(checkExistFavorite, updateStatusContact);

module.exports = router;
