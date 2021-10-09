import express from 'express';
import bodyParse from 'body-parser';
import  Mongoose  from 'mongoose'; 
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}))
app.use(bodyParser.json({limit: "20mb", extended:true}));

app.use(cors());