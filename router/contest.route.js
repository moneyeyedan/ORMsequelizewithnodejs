module.exports = function(app) {
 
    const customers = require('../controller/user.controller');
 
    // Create a new Customer
    app.post('/api/contest', customers.create);
 
    // Retrieve all Customer
    app.get('/api/contest', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/contest/:customerId', customers.findById);
 
    // Update a Customer with Id
    app.put('/api/contest/:customerId', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/contest/:customerId', customers.delete);
}