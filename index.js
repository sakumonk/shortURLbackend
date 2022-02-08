const express = require("express");
const URLDao = require("./data/URLDao");
const db = require("./data/db");



const app = express();
app.use(express.json());
const port = process.env.PORT || 5050;

const urls = new URLDao();
db.connect();

app.post("/", async (req, res) => {
    const { url, short } = req.body;
    const data = await urls.create({url, short});
    res.send(`https://sakuurlshortener.herokuapp.com/${short}`);
});

app.get("/:short", async (req, res) => {
    const short1 = req.params.short;
    const url1 = await urls.read(short1);
    if (url1 != []) {
        const real_url = url1.url;
        res.redirect(`${real_url}`);
    } else {
        res.send("failed!");
    }
});

app.listen(port, () => {
  console.log(`Express app listening at port: http://localhost:${port}/`);
});
