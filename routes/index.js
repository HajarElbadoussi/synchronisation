var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var personnel = require('../models/personnel.js');
 
 
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('personnels', { title: 'List of personnels : '});
 });

//--------------------------------------------------------
router.get('/GetDataJson', function(req, res, next) {
    personnel.find(function (err, personnels) {
    if (err) return next(err);
           res.json(personnels);
   });
 });
 //-------------------------------------------------------

router.get('/:id', function(req, res, next) {
    personnel.find({_id : req.params.id}, function (err, personnel) {
        if (err) return next(err);
           //res.json(personnel);
    res.render('personnel', { title: 'Personnel : ',personnel : personnel });
  });
 });

router.post('/New', function(req, res, next) {
  personnel.create(req.body, function (err, post) {
    if (err) return next(err);
    require('../bin/www').sockets.emit('Change',"OK");
    res.render('insert');
  });
 });

 router.put('/Update/:id', function(req, res, next) {
  personnel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
      res.json(req.body);
  });
});

router.delete('/Remove/:id', function(req, res, next) {
  personnel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
   
  });
});
 


module.exports = router;
 