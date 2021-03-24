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
  http.get('http://localhost:3000/reviews');
  http.get('http://localhost:3000/reviews/meta');
  sleep(1);
}
