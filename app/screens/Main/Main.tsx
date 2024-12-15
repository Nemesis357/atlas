import { KeyboardAvoidingView, Text, View, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
// import auth from '@react-native-firebase/auth';

interface RouterProps {
    navigation: any;
}

const Main = ({navigation}: RouterProps) => {

    const signOut = () => {
        FIREBASE_AUTH.signOut().then(res => console.log('%c FIREBASE_AUTH.signOut() ', 'color: #bada55', res))
        // auth()
        // .signOut()
        // .then(() => console.log('User signed out!'));
    }

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
                <Button onPress={signOut} title="Sign out" />
                {/* <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign out" /> */}
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