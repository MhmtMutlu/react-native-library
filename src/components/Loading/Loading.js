import React from 'react';
import LottieView from 'lottie-react-native';

const LoginAnimations = () => {
  return (
    <LottieView
      source={require('../../assets/animations/loading.json')}
      autoPlay
      loop
    />
  );
};

export default LoginAnimations;
