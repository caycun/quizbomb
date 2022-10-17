import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import { socket } from "../App.tsx";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



export default function Create() {
  const [uniqueId, setUniqueId] = useState<string>("");
  const [rooms, setRooms] = useState(null);

  async function getUniqueId() {
      let uuid = uuidv4();
      let fetchUUID = await AsyncStorage.getItem('secure_deviceid');
      if (fetchUUID) {
          uuid = fetchUUID
              setUniqueId(uuid)
              getRooms(uuid)
              return;
      }
      await AsyncStorage.setItem('secure_deviceid', JSON.stringify(uuid));
          setUniqueId(uuid)
          getRooms(uuid)
  }

  async function getRooms(IuniqueId: string) {
    console.log(IuniqueId);

    await fetch(`https://localhost:3000/device/${IuniqueId}/rooms`).then(response => {
        response.json().then(data => {
            setRooms(data)
        })
    })
  }

  useEffect(() => {
              getUniqueId();
          }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <View>
       {(rooms || []).map((room) => {
           return (
            <Text>
    Some text
  </Text>
  )
               })}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        display: "flex",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
},
});
