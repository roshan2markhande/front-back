const express=require('express');
const app=express();
const mongoose=require('mongoose');
const db_config=require('./config/db.config');
const server_config=require('./config/server.config');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(db_config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db=mongoose.connection;
  db.on('error',()=>{
    console.log("Error while connecting to server");
  })
  db.once('open',()=>{
    console.log("server connected sucessfully");
  })
 require("../routes/user.routes")(app) ;//stitch

  app.listen(server_config.PORT, () => {
    console.log("Server Started on port num:", server_config.PORT);
})

