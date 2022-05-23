import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Register.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {registerValidationSchema} from '../../validation';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import colors from '../../assets/styles/colors';
import PasswordModal from '../../components/Modal/PasswordModal/PasswordModal';

const initialForm = {
  email: '',
  password: '',
  rePassword: '',
};

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

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
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'default',
        backgroundColor: colors.lightGrey3x,
        color: colors.darkGrey2x,
      });
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
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={initialForm}
        onSubmit={handleSignUp}>
        {({handleSubmit, handleChange, values, errors}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Email adresinizi giriniz .."
              value={values.email}
              onType={handleChange('email')}
              iconName="account"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <Input
              isSecure
              placeholder="Şifrenizi giriniz .."
              value={values.password}
              onType={handleChange('password')}
              handleIconPress={() => setModalVisibility(true)}
              iconName="key"
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Input
              isSecure
              placeholder="Şifrenizi tekrar giriniz .."
              value={values.rePassword}
              onType={handleChange('rePassword')}
              handleIconPress={() => setModalVisibility(true)}
              iconName="key"
            />
            {errors.rePassword && (
              <Text style={styles.error}>{errors.rePassword}</Text>
            )}
            <View style={styles.button_wrapper}>
              <Button
                text="Kayıt Ol"
                onPress={handleSubmit}
                loading={loading}
              />
              <Button
                text="Zaten Hesabım Var"
                theme="secondary"
                onPress={() => navigation.navigate('LoginScreen')}
                loading={loading}
              />
            </View>
          </View>
        )}
      </Formik>
      <PasswordModal
        isVisible={modalVisibility}
        onClose={() => setModalVisibility(false)}
      />
    </SafeAreaView>
  );
};

export default Register;
