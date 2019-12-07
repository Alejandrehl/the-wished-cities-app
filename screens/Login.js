import React from "react";
import {KeyboardAvoidingView, ScrollView, Text, StyleSheet} from "react-native";

const Login = () => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}>
            <ScrollView>
                <Text>Login Screen</Text>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Login;