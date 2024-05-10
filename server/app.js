import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();


import HttpError from "./models/http-error.js";
import { signup,login,logout,getUsers} from "./controllers/user-controller.js";
import { IsAuthorized } from "./middlewares/isAuthorized.js";


import { changePassword, sendOTP, verifyOTP } from "./controllers/changePassword.js";

const PORT = process.env.PORT;



const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.post("/signup",signup);
app.post("/login",login);

app.get("/logout",logout);
app.get("/getuser",IsAuthorized, getUsers);



app.post("/sendOTP",sendOTP);
app.post("/verifyOTP",verifyOTP);
app.put("/changePassword",changePassword);


app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });

  mongoose
  .connect(
     `mongodb+srv://${process.env.DB_user_name}:${process.env.DB_password}@subhamdb.ubqol0o.mongodb.net/test?retryWrites=true&w=majority&appName=SubhamDB`
  )
  .then(() => {
    console.log("Server Running");
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });