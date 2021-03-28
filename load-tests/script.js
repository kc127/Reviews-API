import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 1000,
  duration: '1s',
};
export default function () {
  http.get('http://localhost:8000/reviews/1000006')
  http.get('http://localhost:8000/reviews/meta/500005')
  //http.get('http://ec2-52-23-178-221.compute-1.amazonaws.com:8000/reviews/5000');
  //http.get('http://ec2-52-23-178-221.compute-1.amazonaws.com:8000/reviews/meta/5000')

  sleep(1);
}


// import http from 'k6/http';
// import { sleep } from 'k6';

// export let options = {
//   stages: [
//     { duration: "10s", target: 800 },
//     { duration: "30s", target: 500 },
//     { duration: "30s", target: 1000 },
//     { duration: "10s", target: 1000 },
//     { duration: "30s", target: 1500 },
//     { duration: "10s", target: 1500 },
//     { duration: "30s", target: 250 },
//   ],
// };

// export default function () {
//   const product_id = Math.floor(Math.random()*1000000);
//   const x = 5000;
//   http.get('http://localhost:5000/reviews/5000')
//   // http.get(`http://ec2-3-92-221-72.compute-1.amazonaws.com:5000/reviews/${x}`);
//   // http.get(`http://ec2-3-92-221-72.compute-1.amazonaws.com:5000/reviews/meta/${x}`);
//   sleep(1);
// }

// spike test
// 3 different strategies for stress testing