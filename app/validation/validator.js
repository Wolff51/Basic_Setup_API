const debug = require('debug')('Validator:log');
/**
 * Générateur de middleware pour la validation
 * d'un objet d'un des propriété de la requête
 * @param {string} prop - Nom de la propriété de l'objet request à valider
 * @param {Joi.object} schema - Le schema de validation du module Joi
 * @returns
 */
module.exports = (prop, schema) => async (request, _, next) => {
  try {
    debug(request[prop]);
    await schema.validateAsync(request[prop]);
    next();
  } catch (error) {
    next(new Error(error.details[0].message, { statusCode: 400 }));
  }
};
