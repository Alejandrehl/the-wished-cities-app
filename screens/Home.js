import React from "react";
import {KeyboardAvoidingView, ScrollView, Text, StyleSheet} from "react-native";

const Home = () => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}>
            <ScrollView>
                <Text>Home Screen</Text>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Home;