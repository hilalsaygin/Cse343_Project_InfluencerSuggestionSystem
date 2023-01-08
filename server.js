const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Tour = require('./models/tours');
const fs = require('fs');
const app = require('./app');

const { connectToMongoDB } = require('./mongodb');


async function main() {
  await connectToMongoDB();
}

main();

//read file
 const data = fs.readFileSync(`${__dirname}/dev-data/data/influencer_data.json`, 'utf-8')
const tours = JSON.parse(data);



// Import data into DB
const importData = async () => {
  try {
    await Tour.insertMany(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete data from DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const dataUpdate = async () => {
  try {
    const result = await Tour.find({}).sort('-IGI');
    await Tour.deleteMany();
    await Tour.insertMany(result);
    console.log('Data successfully updated!!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--update') {
  dataUpdate();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
