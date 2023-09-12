const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
console.log('here...', path.resolve(__dirname, '../.env'), process.env.MONGODB_URL)

const connectDB = async () => {
   await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
   });

   console.log('connected successfully')
}

module.exports = connectDB