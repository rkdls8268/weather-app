import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async() => {
    try {
      // throw Error();
      const response = await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // send to API and get weather
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
