// posts controller routes

const modPath = require('app-module-path');
modPath.addPath(`${__dirname}/../../../`);

const express = require('express');
const router = express.Router();

const apicache = require('apicache');
const cache = apicache.middleware;
const plateCacheLimit = '59 minutes';
const checkStatus = (req, res) => {
  return res.statusCode === 200;
};

const Pet = require('../models/Pet');


router.get('/', cache(plateCacheLimit, checkStatus), async (req,res, next) => {
  const {page = 1, limit = 10} = req.query;

  const options = {
    page: +page,
    limit: +limit,
    collation: {
      locale: 'en'
    }
  };

  Pet.paginate({}, options, (error, data) => {
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    });

  // Pet.find({}, (error, data) => {
  //   res.status(200);
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send(data);
  // });
});

router.get('/:id', cache(plateCacheLimit, checkStatus), async (req,res, next) => {
  const {id} = req.params;

  Pet.findById(id, (error, data) => {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

module.exports = router;
