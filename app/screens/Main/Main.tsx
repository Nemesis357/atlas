import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createChatRoom, createRecord, getRecord } from '../../../services/firestore';

interface RouterProps {
    navigation: any;
}

const Main = ({navigation}: RouterProps) => {
    const [chatRooms, setChatRooms] = useState([]),
          [newRoomName, setNewRoomName] = useState('');
          
    useEffect(() => {
        let record = {
            title: "New record",
            description: "New description"
        }
        // let status = createRecord(record).then(result => console.log('%c createRecord -result- ', 'color: #bada55', result));

        createChatRoom("Test room");
        
        let collection = getRecord();
    }, []);

    return (
        <View>
            <Text>Main Page</Text>

            <View style={styles.button}>
                <Button onPress={() => navigation.navigate('Details')} title="details page" />
            </View>
            <View style={styles.button}>
                <Button onPress={() => navigation.navigate('Login')} title="login page" />
            </View>
            <View style={styles.button}>
                <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign out" />
            </View>
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    button: {
        marginVertical: 10
    }
})