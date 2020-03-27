// posts controller routes

const modPath = require('app-module-path');
modPath.addPath(`${__dirname}/../../../`);

const express = require('express');
const router = express.Router();


router.get('/', async (req,res, next) => {
  const {page, size} = req.query;

  const data = [{
    "id" : 11,
    "created_at": "2015-04-21T10:44:51-06:00",
    "end": "2015-04-24T07:30:00-06:00",
    "start": "2015-04-24T07:00:00-06:00",
    "updated_at": "2015-04-21T10:44:51-06:00",
    "name": "Gregory House",
    "type": "cat",
    "conditions": [],
    "image": ""
  }, {
    "id" : 12,
    "created_at": "2015-04-21T10:44:51-06:00",
    "end": "2015-04-24T07:30:00-06:00",
    "start": "2015-04-24T07:00:00-06:00",
    "updated_at": "2015-04-21T10:44:51-06:00",
    "name": "Gregory House",
    "type": "cat",
    "conditions": [],
    "image": ""
  }, {
    "id" : 13,
    "created_at": "2015-04-21T10:44:51-06:00",
    "end": "2015-04-24T07:30:00-06:00",
    "start": "2015-04-24T07:00:00-06:00",
    "updated_at": "2015-04-21T10:44:51-06:00",
    "name": "Gregory House",
    "type": "cat",
    "conditions": [],
    "image": ""
  },
    {
      "id" : 14,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 11,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 12,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 13,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    },
    {
      "id" : 14,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 11,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 12,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 13,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    },
    {
      "id" : 14,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 11,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 12,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }, {
      "id" : 13,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    },
    {
      "id" : 14,
      "created_at": "2015-04-21T10:44:51-06:00",
      "end": "2015-04-24T07:30:00-06:00",
      "start": "2015-04-24T07:00:00-06:00",
      "updated_at": "2015-04-21T10:44:51-06:00",
      "name": "Gregory House",
      "type": "cat",
      "conditions": [],
      "image": ""
    }];

  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

router.get('/:id', async (req,res, next) => {
  const {page, size} = req.query;
  const {id} = req.params;

  const data = {
    id,
    "created_at": "2015-04-21T10:44:51-06:00",
    "end": "2015-04-24T07:30:00-06:00",
    "start": "2015-04-24T07:00:00-06:00",
    "updated_at": "2015-04-21T10:44:51-06:00",
    "name": "Sneakers",
    "type": "cat",
    "temperament" : "nervous",
    "conditions": ['heart murmer'],
    "image": ""
  };

  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

module.exports = router;
