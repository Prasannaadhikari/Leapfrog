const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use(express.static("./"));

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
 });

 app.get('/', (req, res) => {
    res.send("Hello World");
});