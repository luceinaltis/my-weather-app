import React, { useState } from "react";
import { View, Text ,StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions: any = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "Do not go outside",
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00c6fb", "#005bea"],
        title: "Rain",
        subtitle: "It is rainy today",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7de2fc", "#b9b6e5"],
        title: "Snowy",
        subtitle: "White snowy day!",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#d7d2cc", "#304352"],
        title: "Cloudy",
        subtitle: "No sunset, No warm",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ff7300", "#fef253"],
        title: "Clear",
        subtitle: "It's time to go out!",
    }
}

export default function Weather({ data }: any) {
    const [temp] = useState(Math.round(data.main.temp));
    const [weather] = useState(data.weather[0].main);
    console.log(weather);
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={weatherOptions[weather]?.gradient || ["black", "white"]}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[weather]?.iconName || "weather-sunset"} size={96} color="white" />
                    <Text style={styles.temp}>{temp}°C</Text>
                </View>
                <View style={styles.halfBottomContainer}>
                    <Text style={styles.title}>{weatherOptions[weather]?.title || "It will be good!!"}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[weather]?.subtitle || ":)"}</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 36,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfBottomContainer: {
        flex: 1,
        padding: 60,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 20,
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
    }
});