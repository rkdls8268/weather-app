import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
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
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }
  getLocation = async() => {
    try {
      // throw Error();
      const response = await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // send to API and get weather
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false}); // null 값으로 처리
      console.log(latitude, longitude);
    } catch (err) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
