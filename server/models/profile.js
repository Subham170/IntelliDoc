import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import { Schema } from "mongoose";

const profileSchema = new Schema({
    // name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    img_url: { type: String }
});

profileSchema.plugin(uniqueValidator);

export  const Profile = mongoose.model("Profile", profileSchema);