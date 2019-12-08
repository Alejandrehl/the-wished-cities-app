import React from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    View
} from "react-native";
import {Image, Input, Button} from 'react-native-elements';
import RegisterImage from "../assets/images/register.png"

const Register = ({navigation}) => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}>
            <ScrollView>
                <Image
                    source={RegisterImage}
                    style={{width: 200, height: 200}}
                    PlaceholderContent={<ActivityIndicator/>}
                    containerStyle={styles.image}
                />
                <View style={styles.formContainer}>
                    <Input
                        label="Your Full Name"
                        placeholder="John Doe"
                        leftIcon={{type: 'font-awesome', name: 'user'}}
                        leftIconContainerStyle={styles.icon}
                        containerStyle={styles.input}
                    />
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
                    <Button title="Register" containerStyle={styles.button}/>
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
    input: {
        marginBottom: 10
    }
});

export default Register;