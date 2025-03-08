import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { felipestyles } from '../styles/MainStyle';
import { saveUser } from '../utils/userData';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username && password) {
      // Save user details to variable
      const user = { username, password };
      saveUser(user);
      Alert.alert('Registration Successful', 'You can now log in with your credentials.');
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={felipestyles.container}>
      <Text style={felipestyles.TitleText}>REGISTRATION FORM</Text>
      <TextInput
        value={username}
        style={felipestyles.TextInput}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        value={lastname}
        style={felipestyles.TextInput}
        placeholder="Last Name"
        onChangeText={(text) => setLastname(text)}
      />
      <TextInput
        value={number}
        style={felipestyles.TextInput}
        placeholder="Phone Number"
        onChangeText={(text) => setNumber(text)}
      />
      <TextInput
        value={password}
        style={felipestyles.TextInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleRegister}>
        <Image style={felipestyles.imageContainer} source={require('../assets/reg.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Register;