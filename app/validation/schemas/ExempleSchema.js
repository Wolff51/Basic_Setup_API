const joi = require('joi');

module.exports = joi.object({
  firstname: joi.string().required(),
  name: joi.string().required(),
  email: joi.string().email(),
  password: joi.string(),
}).required();
