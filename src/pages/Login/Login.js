import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
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
        <Text style={styles.title}>Kitaplık</Text>
      </View>
      <Formik initialValues={{email: '', password: ''}} onSubmit={handleLogin}>
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
            <View style={styles.button_wrapper}>
              <Button text="Giriş Yap" onPress={handleSubmit} />
              <Button
                text="Kayıt Ol"
                theme="secondary"
                onPress={() => navigation.navigate('RegisterScreen')}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
