const mongoose = require('mongoose');
const { mongo, env } = require('./vars');

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = async () => {
  const con = await mongoose.connect(mongo.uri, {
    useNewUrlParser: true,
    keepAlive: 1,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: true
  });

  console.log(
    console.log(`MongoDB Connected: ${con.connection.host}.`)
  );
};
