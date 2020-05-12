//hook up router to server
const express = require('express');
const router = express.Router();

// import methods
const db = require('../data/helpers/projectModel');

router.get('/:id', (req, res) => {
  db.get(req.params.id).then((post) => res.status(200).json(post));
});

router.post('/', (req, res) => {
  db.insert;
});
//export the router
module.exports = router;
