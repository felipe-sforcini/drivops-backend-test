const express = require('express');
const deleteCar = require('./controllers/deleteCar');
const login = require('./controllers/login');
const registerCar = require('./controllers/registerCar');
const registerSeller = require('./controllers/registerSeller');
const registerUser = require('./controllers/registerUser');
const showCars = require('./controllers/showCars');
const showSellers = require('./controllers/showSellers');
const deleteSeller = require('./controllers/deleteSeller');
const authToken = require('./middlewares/auth');
const registerSale = require('./controllers/registerSale');
const showSales = require('./controllers/showSales');
const salesBySellers = require('./controllers/dashboards/salesBySellers');
const teste = require('./controllers/teste');

const routes = express();

routes.post('/login', login);
routes.post('/usuarios', registerUser)
routes.post('/carros', registerCar);
routes.post('/vendedores', registerSeller);
routes.post('/vendas', registerSale);

routes.get('/carros', showCars);
routes.get('/vendedores', showSellers);
routes.get('/vendas', showSales);
routes.get('/dashboards/sales-by-sellers', salesBySellers);
routes.get('/teste', teste)

routes.delete('/carros/:id', deleteCar);
routes.delete('/vendedores/:id', deleteSeller)

module.exports = routes;