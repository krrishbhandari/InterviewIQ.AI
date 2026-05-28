import mongoose from "mongoose";

const connectDb = async () => {
    try{
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Data connected ");
    } catch (error) {
      console.error("Error in connecting to MongoDB:", error); 
    }
}

export default connectDb;