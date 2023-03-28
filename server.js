const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const loanRouter = require('./routes/loanRoute')
app.use('/loans',loanRouter )

const userRouter = require('./routes/userRoute')
app.use('/users',userRouter )

const mongoose = require('mongoose');
const database = 'mongodb+srv://<username>:<password>@naranjo.xzkrvqi.mongodb.net/LoanApplication'
const userName = process.env.DB_USER
const password = process.env.DB_PASSWORD

const MONGO_DATA_BASE = database.replace('<username>',username).replace('<password>', password);

mongoose.connect(MONGO_DATA_BASE,
  //connection recipie
  {
    useNewUrlParser: true,
    //useCreateIndex: true
  }).then(con=>{
    console.log(con.connection);// log connection properties
    console.log(`The Database connection was successful with ${process.env.DATABASE}`);// log connection properties
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});