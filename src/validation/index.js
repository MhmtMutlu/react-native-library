import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir email adresi giriniz!')
    .required('Email girmeniz zorunludur!'),
  password: yup
    .string()
    .min(8, ({min}) => `Şifreniz en az ${min} karakter olmalıdır!`)
    .required('Şifre alanı zorunludur!'),
});

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir email adresi giriniz!')
    .required('Email girmeniz zorunludur!'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Şifreniz en az 1 adet küçük karakter içermelidir!')
    .matches(/\w*[A-Z]\w*/, 'Şifreniz en az 1 adet büyük karakter içermelidir!')
    .matches(/\d/, 'Şifreniz en az 1 adet sayı içermelidir!')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Şifreniz en az 1 adet özel karakter içermelidir!',
    )
    .min(8, ({min}) => `Şifreniz en az ${min} karakter olmalıdır!`)
    .required('Şifre alanı zorunludur!'),
  rePassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Girmiş olduğunuz şifreler eşleşmiyor!')
    .required('Şifre alanı zorunludur!'),
});
