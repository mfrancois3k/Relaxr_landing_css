const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const port = process.env.PORT || 8000;


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // make a folder of public were all my css and script files will be and images

//app.get('/homepage', (req, res) => {
//    res.send('homepage');
//})

const packageData = require('./data');

app.get('/', (req, res) => {
    console.log('index');
    console.log(packageData);
    res.render('index', packageData);
})
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

