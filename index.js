const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const InitiateMongoServer = require("./config/db");
const cors = require("cors");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use('*',cors());
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


const detSchema = new mongoose.Schema({
  empId:{
      type:Number,
      require:true
  },
  firstname:{
      type:String,
      require:true,
  },
  lastname:{
      type:String,
      require:true,
  },
  middlename:{
      type:String,
      require:true,
  },
  department:{
      type:String,
      require:true,
  },
  profileUrl:{
      type:String,
      require:true,
  },
  join:{
      type:String,
      require:true,
  },
  department:{
      type:String,
      require:true,
  },
  addr:{
      type:String,
      require:true,
  },
  zipcode:{
      type:Number,
      require:true,
  },
  town:{
      type:String,
      require:true,
  },
  state:{
      type:String,
      require:true,
  },
  country:{
      type:String,
      require:true,
  },
  email:{
      type:String,
      require:true,
  },
  mobile:{
      type:String,
      require:true,
  },
  tel:{
      type:String,
      require:true,
  },
  location:{
      type:String,
      require:true,
  },

              first:{
              type:String,
              require:true,
          },
          middle:{
              type:String,
              require:true,
          },
          last:{
              type:String,
              require:true,
          },
      docname:{
              type:String,
              require:true,
          },
          desc:{
              type:String,
              require:true,
          },
          doctyp:{
              type:String,
              require:true,
          },
          attac:{
              type:String,
              require:true,
          },
          bank:{
      type:String,
      require:true,
  },
  branch:{
      type:String,
      require:true,
  },
  accname:{
      type:String,
      require:true,
  },
  sort:{
      type:String,
      require:true,
  },
  code:{
      type:String,
      require:true,
  },
  addsort:{
      type:String,
      require:true,
  },
  addcode:{
      type:String,
      require:true,
  },
  emplty:{
      type:String,
      require:true,
  },
  salary:{
      type:String,
      require:true,
  },
})

const Details = mongoose.model('EmployeeDetails',detSchema);
/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

  const det = [];

    app.get('/addDetails',async(req,res)=>{
        // const body = req.body;
        try {
            const details = await new Details(det[0]);
            await details.save();
            res.status(201).send(details);
        } catch (error) {
            console.log(error.message);
            res.status(400).send(error);
        }
    })

app.get('/details',async(req,res)=>{
  try {
  res.status(200).send( await Details.find());
  } catch (error) {
      res.status(400).send(error);
  }
})



app.get('/details/:empId',async(req,res)=>{
  try {
  res.status(200).send( await Details.findOne({empId:req.params.empId}));
  } catch (error) {
      res.status(400).send(error);
  }
})
app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});