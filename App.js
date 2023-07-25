import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const ws = new WebSocket('https://test.doctorapp.ro/doctor-app-websocket'); 
  // const ws = new WebSocket('http://192.168.0.210:8081/doctor-app-websocket'); 
  ws.onerror = console.error;
  ws.onopen = console.log;

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
