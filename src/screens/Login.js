import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { felipestyles } from '../styles/MainStyle';
import { getUser } from '../utils/userData';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = getUser();
    if (user && user.username === username && user.password === password) {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Invalid Credentials', 'The username or password you entered is incorrect.');
    }
  };

  return (
    <View style={felipestyles.container}>
      <Text style={felipestyles.TitleText}>LOGIN</Text>
      <TextInput
        value={username}
        style={felipestyles.TextInput}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        value={password}
        style={felipestyles.TextInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={felipestyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;