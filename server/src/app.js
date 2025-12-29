const express = require('express')
const cors = require('cors')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Import routes
require('./routes')(app);

sequelize.sync({ force: false }).then(() => {
    app.listen(config.port, () => {
        console.log('Server running on port ' + config.port)
    })
})