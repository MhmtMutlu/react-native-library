import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import styles from './Register.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const initialForm = {
  mail: '',
  password: '',
  rePassword: '',
};

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = async formValues => {
    setLoading(true);
    if (formValues.password !== formValues.rePassword) {
      setLoading(false);
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate('LoginScreen');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/library.png')}
        />
        <Text style={styles.title}>Kayıt Ol</Text>
      </View>
      <Formik initialValues={initialForm} onSubmit={handleSignUp}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Email adresinizi giriniz .."
              value={values.email}
              onType={handleChange('email')}
              iconName="account"
            />
            <Input
              isSecure
              placeholder="Şifrenizi giriniz .."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
            />
            <Input
              isSecure
              placeholder="Şifrenizi tekrar giriniz .."
              value={values.rePassword}
              onType={handleChange('rePassword')}
              iconName="key"
            />
            <View style={styles.button_wrapper}>
              <Button text="Kayıt Ol" onPress={handleSubmit} />
              <Button
                text="Zaten Hesabım Var"
                theme="secondary"
                onPress={() => navigation.navigate('LoginScreen')}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
