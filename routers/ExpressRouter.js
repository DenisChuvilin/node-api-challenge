//hook up router to server
const express = require('express');
const router = express.Router();

// import methods
const db = require('../data/dbConfig');

router.get('/:id', (req, res) => {
  db.get(req.params.id).then((post) => res.status(200).json(post));
});

//export the router
module.exports = router;
