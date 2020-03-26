const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.store);

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.get('/incidents/:id', IncidentController.show);
routes.delete('/incidents/:id', IncidentController.remove);

module.exports = routes;
