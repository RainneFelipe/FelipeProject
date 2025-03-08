import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { felipestyles } from '../styles/MainStyle';

const Dashboard = ({ navigation }) => {
  return (
    <View style={felipestyles.container}>
      <Text style={felipestyles.TitleText}>DASHBOARD</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnrollmentForm')}>
          <Text style={styles.buttonText}>Go to Enrollment Form</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewGrades')}>
          <Text style={styles.buttonText}>View Grades</Text>
        </TouchableOpacity>
      </View>
      {/* Add your dashboard content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0000FF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;