const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

mongoose.set("strictQuery", false);

const databaseUrl =
  "mongodb+srv://Influencer:influenceR.7590@influencer.z5lsmky.mongodb.net/Influencer?retryWrites=true&w=majority";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
    console.log("Failed connection to MongoDB.");
  }
};

const mongoDBstore = new MongoStore({
  mongoUrl: databaseUrl,
  autoRemove: "interval",
  autoRemoveInterval: 1, // 1 minute
});

module.exports = { connectToMongoDB, mongoDBstore };
