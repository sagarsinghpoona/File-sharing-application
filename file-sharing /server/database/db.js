import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
   

    const MONGO_URI = `mongodb+srv://sagar:sagar@atlascluster.tnx2t.mongodb.net/`;
    try {
        await mongoose.connect(MONGO_URI, );
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;