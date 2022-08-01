import joi from 'joi';

const userRegistrationSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export default userRegistrationSchema;
