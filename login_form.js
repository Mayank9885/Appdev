const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/mayank', (req, res) => {
    if (req.body.password != "first") {
        res.send(`Username :${req.body.username}. Password :${req.body.password}. ERROR!`);
    } else {
        res.send(`Well done!`);
    }
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});