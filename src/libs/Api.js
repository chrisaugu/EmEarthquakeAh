import axios from 'axios';
// import vercelFetch from '@vercel/fetch';

// export default vercelFetch();

const API_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";

// const Axios = axios.create({
//   "baseUrl": API_URL,
//   "headers": {
//     // 'Content-Type': 'application/json',
//   },
//   "withCredentials": true, // to send cookie
// });


axios.get(API_URL).then(res => {
	console.log(res)
});

// export default Axios;