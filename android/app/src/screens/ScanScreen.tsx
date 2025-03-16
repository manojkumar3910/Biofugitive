import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Press scanner to scan your fingerprint</Text>
      <Icon name="fingerprint" size={100} color="black" />
      <Button title="VERIFY" onPress={() => navigation.navigate('Match')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 20 },
});
