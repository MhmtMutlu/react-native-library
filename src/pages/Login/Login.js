import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}></View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={() => null}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Username .."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              isSecure
              placeholder="Password .."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
            />
            <Button text="LogIn" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
