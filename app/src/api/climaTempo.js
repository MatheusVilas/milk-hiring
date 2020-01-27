// @flow
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import {CLIMA_TEMPO_KEY} from 'react-native-dotenv';

export default class ClimaApi {
  apiUrl: string = 'http://apiadvisor.climatempo.com.br/api/v1';
  apiKey: string = CLIMA_TEMPO_KEY;
  longitude: number;
  latitude: number;

  constructor() {
    // this.getClimate('BR');
    this.getForecast();
  }

  getLocalization() {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      });
    });
  }

  async getForecast() {
    const {coords} = await this.getLocalization();
    const {latitude, longitude} = coords;

    // "forecast/geo/days/15?latitude=-23.5480&longitude=-46.6360&token=your-app-token"
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    const url = `${this.apiUrl}/forecast/geo/days/15?&latitude=${latitude}&longitude=${longitude}&token=${this.apiKey}`;
    axios
      .get(url)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  async getClimate(countryID) {
    const url = `${this.apiUrl}/anl/synoptic/locale/${countryID}?token=${this.apiKey}`;
    axios
      .get(url)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
