import { StyleSheet } from 'react-native';
import { Chatty } from "react-native-chatty";
import React, { useState, useRef } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
    const [messages, setMessages] = useState([
        {
          id: 1,
          text: 'Hello',
          me: true,
          createdAt: new Date(),
          user: {
            id: 1,
            username: 'John Doe',
            avatar: { uri: 'https://i.pravatar.cc/300' },
          },
        },
    ])
    const avatarUrl = "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";
    const text = useRef()

    const onPressSend = (data) => {
        // Implement

        socket.send(data)
    }
    console.log(messages)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
