import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Overlay, Button} from "react-native-elements";

const BudgetOverlay = ({isVisible, handleOverlay, country}) => {
    return (
        <Overlay
            isVisible={isVisible}
            fullScreen={true}
            overlayBackgroundColor={"Transparent"}>
            <View style={styles.container}>
                <Text>You selected {country.name}</Text>
                <Text>How much is your budget?</Text>
                <View>
                    <Button title="Continue"/>
                    <Button title="Cancel" onPress={handleOverlay}/>
                </View>
            </View>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default BudgetOverlay;