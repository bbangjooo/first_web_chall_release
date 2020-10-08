const express=require('express')
const app=express()
const routes=require('./routes')
const bodyParser = require('body-parser');
const nunjucks=require('nunjucks');
const cookieParser = require('cookie-parser')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('views','./views');

app.use(routes);

app.all('*', (req, res) => {
    return res.status(404).send('404 page not found');
});

app.listen(1337, () => console.log('Listening on port 1337'));
