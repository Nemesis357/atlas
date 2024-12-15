import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

interface RouterProps {
    navigation: any;
}

const Details = ({navigation}: RouterProps) => {
    return (
        <View>
            <Text>Details Page</Text>

            <Button onPress={() => navigation.navigate('Main')} title="main page" />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign out" />
        </View>
    )
}

export default Details;