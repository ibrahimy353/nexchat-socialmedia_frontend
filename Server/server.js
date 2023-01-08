import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';

const app = express ();
app.use (bodyParser.json({limit:'30mb', extended: true}));
app.use (bodyParser.urlencoded({limit:'30mb', extended: true}));

mongoose
.connect(
    "mongodb+srv://Ibrahim:12ibrahimyusuf@cluster0.6nvwbtp.mongodb.net/SocialMedia_Youtube?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true})

    .then(() => app.listen(5000, ()=> console.log("Listening")));