import React from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    View
} from "react-native";
import {Image, Input, Button, Divider, Text} from 'react-native-elements';
import LoginImage from "../assets/images/login.png"

const Login = ({navigation}) => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}>
            <ScrollView>
                <Image
                    source={LoginImage}
                    style={{width: 200, height: 200}}
                    PlaceholderContent={<ActivityIndicator/>}
                    containerStyle={styles.image}
                />
                <View style={styles.formContainer}>
                    <Input
                        label="Your Email Address"
                        placeholder="email@address.com"
                        leftIcon={{type: 'font-awesome', name: 'envelope'}}
                        leftIconContainerStyle={styles.icon}
                        containerStyle={styles.input}
                    />
                    <Input
                        label="Password"
                        placeholder="password"
                        leftIcon={{type: 'font-awesome', name: 'lock'}}
                        leftIconContainerStyle={styles.icon}
                        secureTextEntry={true}
                        containerStyle={styles.input}
                    />
                    <Button title="Login" containerStyle={styles.button}/>
                    <Divider style={{ backgroundColor: 'black' }} />
                    <Text
                        onPress={() => navigation.navigate("Register")}
                        style={styles.link}>
                        You don't have an account yet? ¡Sign up!
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        alignSelf: "center"
    },
    formContainer: {
        marginVertical: 50,
        marginHorizontal: 30
    },
    icon: {
        marginRight: 10
    },
    button: {
        marginVertical: 20
    },
    link: {
        marginVertical: 10,
        color: "#1A88FF"
    },
    input: {
        marginBottom: 10
    }
});

export default Login;