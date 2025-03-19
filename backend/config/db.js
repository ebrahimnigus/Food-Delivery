import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ebrahimibnmalik:12Abc324@cluster0.4qoub.mongodb.net/Food-delivery').then(()=>console.log("DB Connected"));
}

// ?retryWrites=true&w=majority&appName=Cluster0