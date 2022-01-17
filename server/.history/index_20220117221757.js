const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogsRoute = require("./routes/blogs.js");
const commentsRoute = require("./routes/comments");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//routes
app.use("/blogs", blogsRoute);
app.use("/", commentsRoute);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
