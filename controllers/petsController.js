// posts controller routes

const modPath = require('app-module-path');
modPath.addPath(`${__dirname}/../../../`);

const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');


router.get('/', async (req,res, next) => {
  const {page, size} = req.query;

  Pet.find({}, (error, data) => {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

router.get('/:id', async (req,res, next) => {
  const {id} = req.params;

  Pet.findById(id, (error, data) => {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

module.exports = router;
