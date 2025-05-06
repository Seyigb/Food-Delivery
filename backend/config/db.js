import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://Tomato:DANIEl1234@@cluster0.cnth3yw.mongodb.net/food-del')).then(()=>console.log("DB Connected"));
}

