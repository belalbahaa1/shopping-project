import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import cors from "cors";
import dns from "dns";
import router from "./routes/routes.js";

// Force Node to use Google DNS to fix SRV lookup issues
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
app.use(bodyParser.json());
app.use("/", router);

// Add a test route to check if the server is alive
app.get("/", (req, res) => {
  res.send("Server is running correctly on port 3000!");
});

// db connection
const connectionString = process.env.ATLAS_URL;

mongoose
  .connect(connectionString, {
    family: 4,
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  })
  .then((res) =>
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    ),
  )
  .catch((err) => console.log("Connection Error: ", err));

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
