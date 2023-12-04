const mongoose = require("mongoose");

const langSchema = new mongoose.Schema({
    lang:{
      type: String,
      required: [true, "Please select any"],
    },
    num:{
      type: Number,
      required: [true, "Please enter number"],
    },
   
  });

  module.exports = mongoose.model("Lang", langSchema);
  
  