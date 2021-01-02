import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
// Ionicons는 icon family 이름

export default function Weather({ temp, condition }) {
    return <View style={styles.container}>
        <View style={styles.halfContainer}>
            <Ionicons name="rainy-outline" size={86} color="black" /> 
            <Text style={styles.temp}>{temp}°C</Text>
        </View>
        <View style={styles.halfContainer} />
    </View>
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});