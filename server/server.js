const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Tour = require('./models/tours');
const fs = require('fs');
const app = require('./app');


const databaseUrl ='mongodb+srv://Influencer:influenceR.7590@influencer.z5lsmky.mongodb.net/Influencer?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
      await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error(err);
  }
};
async function main() {
  await connectToMongoDB();
}

main();


  //read file 
  const tours = JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/userinfo.json`, 'utf-8'));


  
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
  //Delete Data INTO DB
  const deleteData = async () => {
    try {
         await Tour.deleteMany();
         console.log('Data successfully delated!');
        
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };

 const dataUpdate = async () => {
   try{
      const result = await Tour.find({})
      .sort('-IGI');
      await Tour.deleteMany();
      await Tour.insertMany(result);
      console.log('Data successfully updated!!');
   }catch(err){
    console.log(err);
   }
    process.exit();
};

  if(process.argv[2] === '--import'){

      importData();
  }
  else if(process.argv[2] === '--update')
  {
     dataUpdate();
  }
  else if(process.argv[2] === '--delete')
  {
     deleteData();
  }
 


  // else if(process.argv[2] === '--seyma')
  // {
  //   Tour.create({
  //     name: "SymKrltg",
  //     username: "seymkrltg",
  //     biography: "Cse",
  //     followers_count: 316,
  //     media_count: 0,
  //     id:"12345"
  //   }, (err, tour) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log('Succesfully added tour:');
  //     }
  //   });
  //  }
 

const port = process.env.port || 3001 ;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

