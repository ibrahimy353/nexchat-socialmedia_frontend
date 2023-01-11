
import  express  from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app= express();

app.use (bodyParser.json)
app.use (bodyParser.json({limit:'30mb', extended: true}));
app.use (bodyParser.urlencoded({limit:'30mb', extended: true}));

//database
const database = (module.exports = () =>{
   
    const connectionParams ={
 
     useNewUrlParser: true,
     useUnifiedTopology: true,
    }
    
    try {
         mongoose.connect("mongodb+srv://hussein:12ibrahimyusuf@cluster0.7ahpa1g.mongodb.net/?retryWrites=true&w=majority",
         
         connectionParams
         );
 
         console.log("Database connection successfully");
 
    } catch (error) {
         console.log("error");
         console.log("Database connection failed");
 
    }
 });
  database();
 


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


