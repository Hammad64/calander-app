// models/aesKey.js
const mongoose = require('mongoose');

const aesKeySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('USER', aesKeySchema);
