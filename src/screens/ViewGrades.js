import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { felipestyles } from '../styles/MainStyle';

const subjects = [
  { id: '1', name: 'Mathematics', grade: 85 },
  { id: '2', name: 'Science', grade: 90 },
  { id: '3', name: 'History', grade: 78 },
  { id: '4', name: 'English', grade: 92 },
  { id: '5', name: 'Physical Education', grade: 88 },
];

const ViewGrades = () => {
  return (
    <View style={felipestyles.container}>
      <Text style={felipestyles.TitleText}>VIEW GRADES</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Subject</Text>
          <Text style={styles.tableHeader}>Grade</Text>
        </View>
        <FlatList
          data={subjects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.grade}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#0000FF',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0000FF',
  },
  tableHeader: {
    fontWeight: 'bold',
    color: '#0000FF',
    flex: 1,
    textAlign: 'center',
  },
  tableCell: {
    color: '#0000FF',
    flex: 1,
    textAlign: 'center',
  },
});

export default ViewGrades;