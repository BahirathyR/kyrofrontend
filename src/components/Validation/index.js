import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
      firstName: Yup.string().min(3, "It's too short").required('first Name Required'),
      lastName: Yup.string().typeError('Must given Last name').required('Last Name Required'),
      displayName: Yup.string().typeError('Must given Last name').required('Display Name Required'),
      email: Yup.string().email('Enter valid email').required('Enter valid email'),
      phoneNo1: Yup.number()
        .typeError('Enter valid Phone Number')
            .required('Enter valid Phone Number'),
            phoneNo1: Yup.number()
            .typeError('Enter valid Phone Number')
            .required('Enter valid Phone Number'),
            phoneNo2: Yup.number()
        .typeError('Enter valid Phone Number')
            .required('Enter valid Phone Number'),
            phoneNo1: Yup.number()
            .typeError('Enter valid Phone Number')
            .required('Enter valid Phone Number') ,
        location: Yup.string().typeError('Enter address').required('Enter address'),

    });