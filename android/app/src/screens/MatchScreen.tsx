import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MatchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MATCH FOUND!!!</Text>
      <View style={styles.details}>
        <Text>NAME: Balaji J</Text>
        <Text>DOB: 12/10/2004</Text>
        <Text>ADDRESS: 123 Main St</Text>
        <Text>NO. OF CASES: 7</Text>
        <Text>STATUS: WANTED</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  details: { backgroundColor: '#ADD8E6', padding: 10, borderRadius: 5 },
});
