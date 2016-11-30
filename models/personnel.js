var mongoose = require('mongoose');
var PersonnelSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
  });
// comme

module.exports = mongoose.model('Personnel', PersonnelSchema);
