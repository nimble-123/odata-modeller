const debug = require('debug')('odata-modeller');
const express = require('express');
const app = express();

app.use('/', express.static('webapp'));

app.listen(3000, () => {
    debug('Local webserver startet on port 3000...')
});