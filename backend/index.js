const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/transactions", (req, res) => {
  res.json([
    { id: 1, from: "0x84738", to: "Bencana Sumatera", amount: "1 ETH" },
    { id: 2, from: "0x85648", to: "Bencana Longsor Bandung", amount: "2 ETH" }
  ]);
});

app.listen(5000, () => {
  console.log("Backend berjalan di port 5000");
});


