import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { felipestyles } from '../styles/MainStyle';

const EnrollmentForm = () => {
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');

  const handleEnrollment = () => {
    if (studentName && course && email) {
      Alert.alert('Enrollment Successful', `Student: ${studentName}, Course: ${course}, Email: ${email}`);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={felipestyles.container}>
      <Text style={felipestyles.TitleText}>STUDENT ENROLLMENT FORM</Text>
      <TextInput
        value={studentName}
        style={felipestyles.TextInput}
        placeholder="Student Name"
        onChangeText={(text) => setStudentName(text)}
      />
      <TextInput
        value={course}
        style={felipestyles.TextInput}
        placeholder="Course"
        onChangeText={(text) => setCourse(text)}
      />
      <TextInput
        value={email}
        style={felipestyles.TextInput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity onPress={handleEnrollment}>
        <Text style={felipestyles.buttonText}>Enroll</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnrollmentForm;