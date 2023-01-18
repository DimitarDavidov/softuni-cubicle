const express = require('express');


const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');

const app = express();
setupViewEngine(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(config.PORT, () => console.log(`Serve is running on port ${config.PORT}...`))