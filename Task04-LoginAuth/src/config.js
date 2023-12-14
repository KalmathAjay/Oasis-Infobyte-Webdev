const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/login-auth")
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("user", LoginSchema);
module.exports = collection;


//user->user
//user@gmail.com->user123