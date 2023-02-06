import mongoose from "mongoose";

export async function dbConnect(){

   const db = await mongoose.connect('mongodb+srv://luispinot99:Hola1234@cluster0.asrtxol.mongodb.net/linkedin')
   console.log(db.connection.db.databaseName);
}