import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '1s',
};
export default function () {
  http.get('http://localhost:5000/reviews/1000006')
  http.get('http://localhost:5000/reviews/meta/500005')
  sleep(1);
}
