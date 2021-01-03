import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
// Ionicons는 icon family 이름
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm-outline",
        gradient: ["#16222A", "#3A6073"]
    },
    Drizzle: {
        iconName: "rainy-outline",
        gradient: ["#314755", "#26a0da"]
    },
    Rain: {
        iconName: "rainy-outline",
        gradient: ["#2b5876", "#4e4376"]
    },
    Snow: {
        iconName: "snow-outline",
        gradient: ["#757F9A", "#D7DDE8"]
    },
    Atmosphere: {
        iconName: "ios-partly-sunny-outline",
        gradient: ["#283048", "#859398"]
    },
    Clear: {
        iconName: "sunny-outline",
        gradient: ["#F9D423", "#e65c00"]
    },
    Clouds: {
        iconName: "cloud-outline",
        gradient: ["#348AC7", "#7474BF"]
    },
    Haze: {
        iconName: "cloud-outline",
        gradient: ["#616161", "#9bc5c3"]
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Ionicons 
                    name={weatherOptions[condition].iconName} 
                    size={86} 
                    color="white" 
                /> 
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
        <View style={styles.halfContainer} />
        </LinearGradient>
    );
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
        "Haze"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});