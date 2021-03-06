const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name: {type: String, required: true},    
    course: {type: String, required: true},    
    desc: {type: String, required: true},  
})

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;