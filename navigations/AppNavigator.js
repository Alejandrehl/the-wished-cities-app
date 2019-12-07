import React from "react";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createStackNavigator} from 'react-navigation-stack';

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const MainStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            title: "Home"
        })
    }
});

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            title: "Login"
        })
    },
    Register: {
        screen: Register,
        navigationOptions: ({navigation}) => ({
            title: "Register"
        })
    }
});

const MyDrawerNavigator = createDrawerNavigator({
    Main: {
        screen: MainStack
    },
    Auth: {
        screen: AuthStack
    }
}, {
    initialRouteName: "Main",
    drawerWidth: "100%"
});

export default createAppContainer(MyDrawerNavigator);
