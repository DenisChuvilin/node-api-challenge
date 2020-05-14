//hook up router to server
const express = require('express');
const projectRouter = express.Router();

// import methods
const db = require('../data/helpers/projectModel');

// route handlers
projectRouter.get('/:id', (req, res) => {
  db.get(req.params.id).then((post) => res.status(200).json(post));
});

projectRouter.post('/', (req, res) => {
  db.insert;
});
//export the router
module.exports = projectRouter;
