import mongoose from "mongoose";

console.log("process", process.env.MONOG_URL);

export const connectDB = async () => {
  await mongoose.connect(process.env.MONOG_URL, {
      dbName: "food-del",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
