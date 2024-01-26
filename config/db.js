import mongoose from "mongoose";

const connectionDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGURL);
    console.log(
      `MongoDb successfully connected with server ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error in mongodb connection error ${error}`);
  }
};

export default connectionDb;
