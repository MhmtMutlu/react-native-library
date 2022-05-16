import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/Login';
import Register from './pages/Register';
import Library from './pages/Library';
import colors from './assets/styles/colors';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  });

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AuthScreen"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="LibraryScreen"
            component={Library}
            options={{
              title: 'Kitaplığım',
              headerStyle: {
                backgroundColor: colors.darkGrey2x,
              },
              headerTintColor: colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
              },
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.white}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
