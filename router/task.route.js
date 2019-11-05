module.exports = function(app) {
 
    const customers = require('../controller/task.controller');
 
    // Create a new Customer
    app.post('/api/task', customers.create);
 
    // Retrieve all Customer
    app.get('/api/task', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/task/:customerId', customers.findById);
 
    // Update a Customer with Id
    app.put('/api/task/:customerId', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/task/:customerId', customers.delete);
}