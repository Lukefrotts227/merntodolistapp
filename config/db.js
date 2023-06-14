const mongoose  = require('mongoose');
const fs = require('fs'); 
let jsonData = require('./default.json'); 

const db = jsonData['mongoURI']; 



const connectDB = async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(db, {
        useNewUrlParser: true,
      });
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  
  
    //const app = express();
    //const port = config.get('PORT'); 
  
    //app.listen(port, () => console.log('Server is running and up on port ' + port +'!'));
  };
  
  module.exports = connectDB;