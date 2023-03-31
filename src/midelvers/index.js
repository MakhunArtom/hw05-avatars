/**
 * From Contacts
 */
const { checkReqBody, checkExistFavorite } = require('./contacts/checkReqBody');
const { chexkId } = require('./contacts/chexkId');
const { createContactValidator } = require('./contacts/createContactValidator');
const { updeteContactValidator } = require('./contacts/updetContactValidator');

module.exports = {
  checkReqBody,
  chexkId,
  createContactValidator,
  updeteContactValidator,
  checkExistFavorite,
};
