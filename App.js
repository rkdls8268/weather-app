import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import Weather from './Weather';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "c1c00ef79cbffea261e6508335fa8b4d";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    // 백틱과 template strings 사용 -> es6
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp });
  }
  getLocation = async() => {
    try {
      // throw Error();
      const response = await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // send to API and get weather
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);
    } catch (err) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>;
  }
}
