'use strict'

const app = require('./bin/app');

const port = app.set('port');

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
});