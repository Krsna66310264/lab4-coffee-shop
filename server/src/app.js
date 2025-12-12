let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app)

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});