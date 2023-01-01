const Joi = require("joi");

const createUserSchema = (user) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(5).required(),
    CNIC: Joi.string().min(13).max(14).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().required(),
    designation: Joi.string().required(),
    phone: Joi.string().required()
  });

  return schema.validate(user);
};

module.exports = createUserSchema;
