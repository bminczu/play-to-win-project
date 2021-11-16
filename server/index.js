
   

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();


app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
////related to depreceated bodyparser https://stackoverflow.com/questions/69030963/error-usefindandmodify-is-an-invalid-option //
app.use(cors());
app.use('/posts', postRoutes)


const CONNECTION_URL = "mongodb+srv://bart:password2@cluster0.pw4sd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



