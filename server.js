const expresss = require('express'); 

const app = express(); 

const UserModel = require('./models/User'); 

const cors = require('cors'); 
const connectDB = require('./config/db'); 

app.use(express.json()); 
app.use(cors()); 

const port = 5000; 



connectDB(); 

app.post("/users/createuser", async (req,res) =>{
    try{
        const user = req.body; 
        const newUser = UserModel(user); 
        await newUser.save(); 
        res.status(200).json(user); 

    }
    catch(error){
        res.status(500).json({message: "could not create user", error:error}); 

    }
})

