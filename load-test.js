import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ]
};
export default function () {
  http.get('http://localhost:5000/reviews/1000006')
  http.get('http://localhost:5000/reviews/meta/500005')
  sleep(1);
}
