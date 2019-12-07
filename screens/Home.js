import React, {useState, useEffect} from "react";
import {KeyboardAvoidingView, ScrollView, Text, StyleSheet} from "react-native";

const Home = ({navigation}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            navigation.navigate("Login");
        }
    }, []);

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