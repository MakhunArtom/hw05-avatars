const { Router } = require('express');

const {
  checkReqBody,
  chexkId,
  createContactValidator,
  updeteContactValidator,
} = require('../midelvers/index');

const {
  getControler,
  getByIdControler,
  createControler,
  deleteControler,
  updeteControler,
} = require('../controlers/contact');

const router = Router();

router.route('/').get(getControler).post(checkReqBody, createContactValidator, createControler);
// router.get('/', getControler);
// router.post('/', checkReqBody, createContactValidator, createControler);

router.use('/:contactId', chexkId);
router
  .route('/:contactId')
  .get(getByIdControler)
  .delete(deleteControler)
  .put(checkReqBody, updeteContactValidator, updeteControler);

// router.get('/:contactId', getByIdControler);
// router.delete('/:contactId', deleteControler);
// router.put('/:contactId', checkReqBody, updeteContactValidator, updeteControler);

module.exports = router;
