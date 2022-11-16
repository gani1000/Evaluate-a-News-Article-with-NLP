
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const API_KEY = process.env.API_KEY;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.post('/add', (req, res) => {
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&txt=${req.body.texturl}`;
    console.log(url);
    axios({
        url: url,
        responseType: 'json'
    }).then(data => {
        res.send(data);
        console.log(data)
    })
});

app.listen(8080, function () {
    console.log('Start on http://localhost:8080');
});
