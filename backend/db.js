const mongo = require("mongodb");
let _db;
const MongoClient = mongo.MongoClient;
const mongoDbUrl =
  "mongodb+srv://mohamedwahba:4Srx9DShlTJ3zfUI@cluster0.8av7vwc.mongodb.net/shop?retryWrites=true";

const initDb = (callback) => {
  if (_db) {
    console.log("Database is already initialized");
    return callback(null, _db);
  }
  MongoClient.connect(mongoDbUrl)
    .then(client => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};
const getDb = () => {
  if (!_db) {
    throw Error("Database is not initialized")
  }
  return _db;
};
module.exports = {
  initDb,
  getDb
};
