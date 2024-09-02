import * as Joi from 'joi';

const customerSchema = Joi.object({
  name: Joi.string().max(254).required(),
  email: Joi.string().email().max(254).required(),
  // country: Joi.string(),
  // currency: Joi.string(),
  // customerStartDate: Joi.string().max(50).isoDate(),
  // companyId: Joi.string().max(24),
  // phoneNumber: Joi.string().max(10),
  // address: Joi.string().max(254),
  // notes: Joi.string().max(254),
}).options({ allowUnknown: false });

export const customerNewSchema = customerSchema.fork(
  [
    'name',
    'email',
    //  'country', 'currency', 'customerStartDate'
  ],
  (schema) => schema.required(),
);
export const customerEditSchema = customerSchema.fork(
  [
    'name',
    'email',
    // 'country',
    // 'currency',
    // 'customerStartDate',
    // 'companyId',
    // 'phoneNumber',
    // 'address',
    // 'projects',
  ],
  (schema) => schema.optional().allow(null),
);

export default customerSchema;
