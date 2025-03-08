import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import EnrollmentForm from './src/screens/EnrollmentForm';
import ViewGrades from './src/screens/ViewGrades';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EnrollmentForm" component={EnrollmentForm} />
        <Stack.Screen name="ViewGrades" component={ViewGrades} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;