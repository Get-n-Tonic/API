import express from "express";
import cocktailRoute from "./routes/cocktailRoute.js";
const app = express();
const PORT = 8080;

app.use(express.static("public"));
// app.use(cors());
app.use(express.json());

app.use("/cocktails", cocktailRoute);

app.get("/", function (req, res) {
  res.send("This is the cocktail homepage");
});

app.listen(PORT, function () {
  console.log(`You made it to ${PORT}`);
});
