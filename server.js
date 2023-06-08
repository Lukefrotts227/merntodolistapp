const expresss = require('express'); 

const app = express(); 

const UserModel = require('./models/User'); 

const cors = require('cors'); 
const connectDB = require('./config/db'); 

app.use(express.json()); 
app.use(cors()); 

const port = 5000; 



connectDB(); 