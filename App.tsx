import React, {useEffect, useState} from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import Weather from "./Weather";

const API_KEY = "8cb0ae6a6d26caf00f700da043a0fff3";
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        getLocation();
    }, []);
    
    async function getLocation() {
        try {
            const response = await Location.requestPermissionsAsync();
            const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync({});
            const fetched = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            const json = await fetched.json();
            setData(json);
            setLoading(false);
        } catch(err) {
            Alert.alert("Can't find you.", "So sad");
        }
    } 


    return (isLoading ? <Loading /> : <Weather data={data}/>);
}
