var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require('./cors');

const mongoose = require('mongoose');

const Cutomers = require('../models/customers');

router.use(bodyParser.json());

router.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get((req, res, next) => {
        Cutomers.find({})
            .then((customerrecords) => {

                res.setHeader('Content-Type', 'application/json');
                res.header("Access-Control-Allow-Origin", "*");
                res.json(customerrecords);

            },
                (err) => next(err))
            .catch((err) => next(err));


    });
 

module.exports = router;
    