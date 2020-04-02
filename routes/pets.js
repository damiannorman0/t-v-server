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
const errorUtils = require('../utils/ErrorUtils');

const okResponse = ({res, data}) => {
  res.json(data);
};


router.get('/', cache(plateCacheLimit, checkStatus), async (req,res, next) => {
  const {page = 1, limit = 10} = req.query;


  const options = {
    page: +page,
    limit: +limit,
    collation: {
      locale: 'en'
    }
  };

  if(limit < 1 || page < 1) {
    errorUtils.handle(res, next, {name: 'invalid'});
    return;
  }

  Pet.paginate({}, options, (error, data) => {
    (!data || error) ? errorUtils.handle(res, next, error) : okResponse({res, data});
  });
});

router.get('/:id', cache(plateCacheLimit, checkStatus), async (req,res, next) => {
  const {id} = req.params;

  Pet.findById(id, (error, data) => {
    (!data || error) ? errorUtils.handle(res, next, error) : okResponse({res, data});
  });
});

module.exports = router;
