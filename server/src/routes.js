const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app) => {
    app.get('/coffees', CoffeeController.index)
    app.get('/coffee/:id', CoffeeController.show) 
    app.post('/coffee', CoffeeController.create)
    app.put('/coffee/:id', CoffeeController.put) 
    app.delete('/coffee/:id', CoffeeController.remove) 
}