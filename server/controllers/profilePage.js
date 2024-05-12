import { sendEmail } from "../middlewares/nodemailer";
import { Profile } from "../models/profile";
const { text } = pkg;
import pkg from "bodyParser";

import bodyParser from "body-parser";
export const submitFeedback = async(req,res)=>{
    const {email} = req.user;
    
    const msg = `
      
      <p> Thank you for submitting your feedback!</p>
      <p> We appreciate you taking the time to share your thoughts with us. Your feedback helps us improve our web application and provide a better experience for all our users.</p>
      <p> We're thrilled to have you on board and look forward to assisting you on your journey towards better health and well-being. Feel free to explore the features, upload your data, and start benefiting from our services.</p>
      <p>If you have any further comments or suggestions, please feel free to reach out to us. We value your input and are committed to making our application the best it can be.</p>
      <p> Thanks again!</p>
      <p>Best regards,</p>
      <p>Team IntelliDoc</p>`;

    sendEmail(email, "Feedback submission!", msg);

    res.json({success:true,
        message:"Feedback submitted successfully!"
    });
  };

  export const getProfile = async(req,res)=>{
    const {email} = req.user;

    const result = await Profile.findOne({email:email}) ;
    res.json({image_url: result.img_url});
 }