
import * as yup from 'yup'
export default yup.object().shape({
    name:yup
    .string()
    .required(2, 'Name must be 2 chars long')
    .min(2, 'must be 2 chars long'),
    size: yup
      .string()
      .required("must choose size"),
    sauce: yup
      .string()
      .required('must pick sauce'),
   pepperoni:yup.boolean(),
   mushroom:yup.boolean(),
   onion:yup.boolean(),
   feta:yup.boolean(),
   instructions:yup
   .string()
   
})