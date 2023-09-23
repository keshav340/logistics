const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://gst-return-status.p.rapidapi.com/free/gstin/27AAJCM9929L1ZM',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '5304f85846mshf2582d3224f9f7fp1f76cdjsn855053fb983a',
    'X-RapidAPI-Host': 'gst-return-status.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
