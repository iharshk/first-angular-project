const express = require('express');
const bodyParser = require('body-parser')
const checkAuth = require('./middleware')
let operation = require('./controller');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.use(bodyParser.json());

app.post('/post-route',checkAuth, (req, res) => {
    operation.addUser(req).then((data) => {
        
        res.send(data);
    }).catch((err) => {
        console.log(err);

        res.send(err);
    })
})

app.get('/get-route', checkAuth, (req, res) => {
    operation.getUser(req).then((data) => {
        res.send(data.message);
    }).catch((err) => {
        res.send(err);
    })
})


app.listen(3000, () => {
    console.log("server is running on port 3000")
});
