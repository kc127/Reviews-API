import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: "30s", target: 1000 },
    { duration: "30s", target: 500 },
    { duration: "30s", target: 1000 },
    { duration: "10s", target: 1000 },
    { duration: "30s", target: 1500 },
    { duration: "10s", target: 1500 },
    { duration: "30s", target: 250 },
  ],
};

export default function () {
  const product_id = Math.floor(Math.random()*1000000);
  const x = 5000;
  http.get('http://localhost:5000/reviews/5000')
  // http.get(`http://ec2-3-92-221-72.compute-1.amazonaws.com:5000/reviews/${x}`);
  // http.get(`http://ec2-3-92-221-72.compute-1.amazonaws.com:5000/reviews/meta/${x}`);
  sleep(1);
}

// spike test
// 3 different strategies for stress testing 