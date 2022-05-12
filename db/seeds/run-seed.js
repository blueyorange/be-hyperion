const seed = require("./seed.js");
const connectDB = require("../connect.js");
const devData = require("../data/dev-data");
const mongoose = require("mongoose");

const runSeed = async (data) => {
  mongoose.connection.dropCollection("presentations");
  mongoose.connection.dropCollection("users");
  await connectDB();
  await seed(data);
  await mongoose.connection.close();
};

runSeed(devData);
