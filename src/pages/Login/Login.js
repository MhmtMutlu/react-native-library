import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/library.png')}
        />
        <Text style={styles.title}>Kitaplık</Text>
      </View>
      <Formik initialValues={{email: '', password: ''}} onSubmit={() => null}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Email ..."
              value={values.email}
              onType={handleChange('email')}
              iconName="account"
            />
            <Input
              isSecure
              placeholder="Şifre ..."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
            <Button text="Kayıt Ol" theme="secondary" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
