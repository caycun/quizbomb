import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { io } from "socket.io-client";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Create from './components/Create';

export const socket = io("http://localhost:3000");

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
    const [displayName, setDisplayName] = useState<string>("");
    const [room, setRoom] = useState<string>("");


    return (
            <View style={styles.container}>
            <StatusBar style="auto" />
            <TextInput placeholder="Enter your username..." style={styles.input} value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
            <Button title="Join"/>
            <Button title="Create" onPress={() => 
                navigation.navigate('Create', {room: room})
            }/>
            </View> 
           )
}

export default function App() {
 
  return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
        />
    <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        display: "flex",
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
},
});
