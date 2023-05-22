var express                   = require('express');//express is a module which is come from third party (NPM)
var app                       = express();
var bodyParser                = require('body-parser');//this is use to get the json from the request string
var ResponseMicros            = require('./Macros/ResponseMicros');
var apiEndPoints              = require('./routes/api');
const mongoose = require("mongoose");

//for use env varables
const dotenv                  = require('dotenv');
const env                     = process.env;



dotenv.config();

app.use(bodyParser.json());
ResponseMicros.response(app);

// require('./controllers/akash')
//end point calling..
app.use('/api', apiEndPoints);

app.get('*', function (req, res) {
  // res.send('Route Not Found', 404);
  res.routeNotFound();
});

// const url = env.DB_CLOUD;
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => console.log(`Successfully Connected to ${url}`));

app.listen(env.port, () => {
  console.log(`Example app listening at http://localhost:${env.port}`)
})

module.exports = app;
