const mongoose = require('mongoose');


const PersonsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    job: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    }
});

const Persons = mongoose.model('Persons', PersonsSchema);

module.exports = Persons;