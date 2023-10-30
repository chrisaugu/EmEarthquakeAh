import axios from 'axios';
// import vercelFetch from '@vercel/fetch';
// export default vercelFetch();
import csv2json from "./Utils";

export const API_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query";
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=-5.2266836&longitude=145.3972343&maxradiuskm=1000
const Axios = axios.create({
  "baseUrl": API_URL,
  "headers": {
    // 'Content-Type': 'application/json',
  }
});

// axios.get(API_URL, {
// 	params: {
// 		'format': 'csv',
// 		'latitude': -5.2266836,
// 		'longitude': 145.3972343,
// 		'maxradiuskm': 1000
// 	}
// }).then(res => {
// 	console.log(res)
// 	let data = csv2json(res.data)
// 	console.log(data)
// });

export default Axios;