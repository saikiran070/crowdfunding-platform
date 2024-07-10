// models/Update.js
const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  content: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Update', updateSchema);
