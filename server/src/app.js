let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//home 
app.get('/', (req, res) => {
    res.send('Welcome to our coffee shop!');
});

//menu 
app.get('/menu', (req, res) => {
    res.send('Espresso Americano Latte Cappuccino Mocha');
});

// create user
app.post('/user/', function (req, res) {
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body));
});

// edit user
app.put('/user/:name', function (req, res) {
    // req.params.name 
    // req.body.name   
    res.send('เปลี่ยนชื่อจาก: ' + req.params.name + ' ' + 'เป็น: ' + req.body.name);
});

// delete user
app.delete('/user/:name', function (req, res) {
    res.send('ทำการลบผู้ใช้งาน: ' + req.params.name + ' ' + JSON.stringify(req.body));
});


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});