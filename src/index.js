const express = require('express');

const routes = require('./routes')
const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');

const app = express();
setupViewEngine(app);

app.use(express.static('src/public'));

app.listen(config.PORT, () => console.log(`Serve is running on port ${config.PORT}...`))