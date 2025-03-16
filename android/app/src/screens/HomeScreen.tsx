import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the navigation stack type
type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
};

// Define props for the HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Scan" onPress={() => navigation.navigate('Scan')} />
      <Button title="Recent Doc" onPress={() => navigation.navigate('Scan')} />
      <Button title="All Doc" onPress={() => navigation.navigate('Scan')} />
      <Button title="Forensic" onPress={() => navigation.navigate('Scan')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default HomeScreen;
