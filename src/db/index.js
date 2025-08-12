import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async() => {
    try {
     const connectionInstanec = await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)

     console.log(`\ MongoDB coonected !! DB HOST: ${connectionInstanec.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection Failed", error);
        process.exit()
    }
}


export default connectDB