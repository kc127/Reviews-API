const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/retaildb',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('we are connected');
});


const photos = new mongoose.Schema({
  id: {type: Number},
  url: {type: String}
})

const results = new mongoose.Schema({
    review_id: {type: Number},
    rating: {type: Number},
    summary: {type: String},
    recommend: {type: Boolean},
    response: {type: String},
    body: {type: String},
    date: {type: },
    reviewer_name: {type: String},
    helpfulness: {type: Number},
    photos: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'photos'
    }
})

const reviews = new mongoose.Schema({
  product_id: {type: Number},
  page: {type: Number},
  count: {type: Number},
  results: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'results'
  }
})


// const reviews_meta = new mongoose.Schema({
//   product_id: {type: Number},
//   ratings: {
//     zero: {type: Number},
//     one:{type: Number} ,
//     two: {type: Number},
//     three: {type: Number},
//     four: {type: Number},
//     five:{type: Number}
//   },
//   recommended: {
//     false: {type: Number},
//     true: {type: Number}
//   },
//   characteristics: {
//     characteristics_name: {
//       type: type: mongoose.Schema.Type.ObjectId,
//       ref: 'id_value',
//     }
//   }
// });

// const id_value = new mongoose.Schema({
//   id: {type: Number},
//   value: {type: Number}
// })

// const characteristics = new mongoose.Schema({
//   characteristics_name: {
//     type: mongoose.Schema.Type.ObjectId,
//     ref: 'id_value',
//   }
// })

// const recommended = new mongoose.Schema({
//   false: {type: Number},
//   true: {type: Number}
// })

// const ratings = new mongoose.Schema({
//   zero: {type: Number},
//   one:{type: Number} ,
//   two: {type: Number},
//   three: {type: Number},
//   four: {type: Number},
//   five:{type: Number}
// })

