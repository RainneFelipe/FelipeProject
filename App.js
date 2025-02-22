import React, {useState} from "react";
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import { felipestyles } from "./src/styles/MainStyle";


const App = () => {
  const [username, setUsername ] = useState('')
  const [lastname, setLastname ] = useState('')
  const [number, setNumber ] = useState('')


  return(
    <View style={felipestyles.container}>
    <Text
    style={felipestyles.TitleText}
    >
        REGISTRATION FORM
    </Text>
   
    <TextInput
    value={username}
    style={felipestyles.TextInput}
    onChangeText={(text) => setUsername(text)}
    />



    <TextInput
    value={lastname}
    style={felipestyles.TextInput}
    onChangeText={(text) => setLastname(text)}
    />

<TextInput
    value={number}
    style={felipestyles.TextInput}
    onChangeText={(text) => setNumber(text)}
    />

    <TouchableOpacity
    onPress = {() => console.log(`Username: ${username}, Last Name: ${lastname}, Phone Number: ${number}`)}
    > 
        <Image
    style={felipestyles.imageContainer}
    source={ require('./src/assets/reg.png')}
    />
    </TouchableOpacity>
    
    </View>


  );
}

export default App