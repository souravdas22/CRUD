const mongoose = require('mongoose');

const dbConnecton = async () => {
    try {
      const connection = await mongoose.connect(process.env.MONGO_URL);
      if (connection) {
        console.log("Connected to mongodb");
      }
    } catch (err) {
      console.log(`error in mongodb conneciton ${err}`);
    }
}
module.exports = dbConnecton;