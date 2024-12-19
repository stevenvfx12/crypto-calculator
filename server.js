const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/crypto", async(req, res) => {
    const {coin} = req.query;
    try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: "failed to fetch crypto data"});
    }
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})