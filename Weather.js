import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
// Ionicons는 icon family 이름
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm-outline",
        gradient: ["#16222A", "#3A6073"],
        title: "Thunderstorm",
        subtitle: "DO NOT GO OUTSIDE"
    },
    Drizzle: {
        iconName: "rainy-outline",
        gradient: ["#314755", "#26a0da"],
        title: "Drizzle",
        subtitle: "Gloomy, drizzle"
    },
    Rain: {
        iconName: "rainy-outline",
        gradient: ["#2b5876", "#4e4376"],
        title: "Rain",
        subtitle: "Don't forget to bring your umbrella"
    },
    Snow: {
        iconName: "snow-outline",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "Snow",
        subtitle: "A whole world becomes white"
    },
    Atmosphere: {
        iconName: "ios-partly-sunny-outline",
        gradient: ["#283048", "#859398"],
        title: "Atmosphere",
        subtitle: "I have no idea..."
    },
    Clear: {
        iconName: "sunny-outline",
        gradient: ["#F9D423", "#e65c00"],
        title: "Clear",
        subtitle: "What a nice weather today!"
    },
    Clouds: {
        iconName: "cloud-outline",
        gradient: ["#348AC7", "#7474BF"],
        title: "Clouds",
        subtitle: "Wanna see the sun☀️"
    },
    Haze: {
        iconName: "cloud-outline",
        gradient: ["#616161", "#9bc5c3"],
        title: "Haze",
        subtitle: "Be careful when you drive"
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
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
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
        // justifyContent: "center",
        // alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start", // 왼쪽부터 정렬됨
        justifyContent: "center",
        flex: 1
    }
});