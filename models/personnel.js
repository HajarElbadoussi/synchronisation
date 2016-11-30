var mongoose = require('mongoose');
var PersonnelSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
  });
module.exports = mongoose.model('Personnel', PersonnelSchema);
