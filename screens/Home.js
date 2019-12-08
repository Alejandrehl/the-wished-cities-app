import React, {useState, useEffect} from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View
} from "react-native";
import {Icon} from 'react-native-elements'
import BudgetOverlay from "../components/overlays/BudgetOverlay";

const Home = ({navigation}) => {
    const isAuthenticated = true;
    const countries = [{
        name: "Chile",
        cities: [{
            name: "Santiago",
            cost: 1000
        }, {
            name: "Viña del Mar",
            cost: 600
        }, {
            name: "La Serena",
            cost: 600
        }]
    }, {
        name: "Argentina",
        cities: [{
            name: "Buenos Aires",
            cost: 1000
        }, {
            name: "Córdoba",
            cost: 1000
        }, {
            name: "Rosario",
            cost: 800
        }]
    }, {
        name: "Brazil",
        cities: [{
            name: "Rio de Janeiro",
            cost: 1200
        }, {
            name: "Sao Paulo",
            cost: 1200
        }, {
            name: "Belo Horizonte",
            cost: 1000
        }]
    }, {
        name: "United States",
        cities: [{
            name: "New York",
            cost: 1500
        }, {
            name: "Los Angeles",
            cost: 1500
        }, {
            name: "Chicago",
            cost: 1500
        }]
    }, {
        name: "Mexico",
        cities: [{
            name: "Mexico",
            cost: 1300
        }, {
            name: "Guadalajara",
            cost: 1200
        }, {
            name: "Mérida",
            cost: 1100
        }]
    }];

    const [isVisible, setIsVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        if (!isAuthenticated) {
            navigation.navigate("Login");
        }
    }, []);

    const handleOverlay = () => {
        setIsVisible(!isVisible);
    };

    const handleSelectedCountry = country => {
        setSelectedCountry(country);
        setIsVisible(!isVisible);
    };

    const renderCountries = country => {
        const {item} = country;
        return (
            <TouchableOpacity
                onPress={() => handleSelectedCountry(item)}
                style={styles.flatListRow}>
                <Icon
                    name="plane"
                    type="font-awesome"
                    iconStyle={styles.iconLeftContainer}/>
                <Text>{item.name}</Text>
                <Icon
                    name="chevron-right"
                    type="font-awesome"
                    color="#1A88FF"/>
            </TouchableOpacity>
        );
    };

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>¡Hi Alejandro!</Text>
                    <Text style={styles.title}>Select Your New Destination</Text>
                </View>
                <FlatList
                    data={countries}
                    renderItem={renderCountries}
                    keyExtractor={(item, index) => index.toString()}/>
                <BudgetOverlay
                    isVisible={isVisible}
                    handleOverlay={handleOverlay}
                    country={selectedCountry}
                />
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatListRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        shadowColor: "#f2f2f2",
        shadowOffset: {
            width: 5,
            height: 10
        },
        shadowOpacity: 20,
        shadowRadius: 5
    },
    iconLeftContainer: {
        backgroundColor: "#93CF89",
        padding: 5,
        color: "white"
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
    title: {
        fontSize: 16,
    }
});

export default Home;