var express = require('express');
var app = express();
var path = require('path');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '.')));
app.get('/', function (req, res) {
    res.render('../home.html');
});

console.log(process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);
