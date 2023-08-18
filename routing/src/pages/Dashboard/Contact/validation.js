import { object, string, number, date, InferType } from 'yup';


const contactSchema = object({
    firstName: string().required('Bu alan zorunludur'),
    lastName: string().required(),
    email: string().email('Geçerli bir email giriniz').required(),
    message: string().min(5, 'Minimum 5 karakter giriniz').required()

    // age: number().required().positive().integer(),
    // website: string().url().nullable(),
    // createdOn: date().default(() => new Date()),
  });

  export default contactSchema;