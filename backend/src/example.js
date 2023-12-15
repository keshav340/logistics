// geocoding-example.js
const axios = require('axios');

class GeocodingService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getLocationCoordinates(location) {
    const encodedLocation = encodeURIComponent(location);
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=${this.apiKey}`;

    try {
      const response = await axios.get(apiUrl);

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
      } else {
        throw new Error('No results found for the given location.');
      }
    } catch (error) {
      throw new Error(`Error geocoding location: ${error.message}`);
    }
  }
}


const apiKey = 'AIzaSyCFigvs7RwemDJcfluki8CNX4uTUzua5Lo';
const geocodingService = new GeocodingService(apiKey);

const location = '1600 Amphitheatre Parkway, Mountain View, CA';
geocodingService.getLocationCoordinates(location)
  .then((coordinates) => {
    console.log('Location Coordinates:', coordinates);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
