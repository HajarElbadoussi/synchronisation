var mongoose = require('mongoose');
var PersonnelSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
  });
// commentaire
module.exports = mongoose.model('Personnel', PersonnelSchema);
