import { KeyboardAvoidingView, Text, View, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig.ts';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [loading, setLoading] = useState(''),
          auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log("Sign in error: ",  error);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={text => setEmail(text)}
                    value={email}
                ></TextInput>

                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={text => setPassword(text)}
                    value={password}
                ></TextInput>

                {
                    loading ? <ActivityIndicator size="large" color="#0000ff" />
                    : <>
                        <Button title="Login" onPress={signIn} />
                        <Button title="Create" onPress={signUp} />
                    </>
                }
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        flex: 1,
        marginVertical: 30
    },
    input: {
        marginVertical: 10,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 1,
        backgroundColor: '#fff'
    }
})

