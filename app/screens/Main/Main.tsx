import { KeyboardAvoidingView, Text, View, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig.ts';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Main = ({navigation}: RouterProps) => {
    return (
        <View>
            <Text>Main Page</Text>

            <Button onPress={() => navigation.navigate('login')} title="Login page" />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign out" />
        </View>
    )
}

export default Main;