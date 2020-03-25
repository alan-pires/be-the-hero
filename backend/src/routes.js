const express = require('express');
const OngControler = require('./controler/OngControler');
const IncidentControler = require('./controler/IncidentControler');
const ProfileControler = require('./controler/ProfileControler');
const SessionControler = require('./controler/SessionControler');

const routes = express.Router();

routes.post('/sessions', SessionControler.create);

routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/profile', ProfileControler.index)

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);

    module.exports = routes;