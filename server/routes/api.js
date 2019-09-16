var express = require('express');
var router = express.Router();

var Persons = require('../models/persons');
/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.send({
//         name: 'Puvesh Makode',
//         job: 'Full Stack developer',
//         salary: '100k'
//     });
// });


// Get all Posts
router.get('/', (req, res) => {
    Persons.find({})
        .then(persons => {
            res.send(persons);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
});

// Get Post
router.get('/:id', (req, res) => {
    Persons.find({_id: req.params.id})
        .then(person => {
            res.send(person);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
});


// Insert Post
router.post('/add', (req, res) => {
    console.log(req.body);
    let newPerson = new Persons({
        name: req.body.i_name,
        job: req.body.i_job,
        salary: req.body.i_salary
    });

    newPerson.save()
        .then(person => {
            res.send(person);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while inserting data."
            });
        });
});


// Update Post
router.put('/update/:id', (req, res) => {
    // res.send(.json);
    Persons.findByIdAndUpdate(req.params.id, {name: req.body.toupdate_name,job: req.body.toupdate_job, salary: req.body.toupdate_salary}, {new: true})
        .then(toupdateperson => {
            if (!toupdateperson) {
                return res.status(404).send({
                    message: "Person not found with id " + req.params.id
                });
            }
            res.send(toupdateperson);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating data."
            });
        });
});


// Delete Post
router.delete('/delete/:id', (req, res) => {
    Persons.findByIdAndRemove(req.params.id)
        .then(todeleteperson => {
            if (!todeleteperson) {
                return res.status(404).send({
                    message: "Person not found with id " + req.params.id
                });
            }
            res.send({message: "Person deleted successfully!"});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while Deleting data."
            });
        });
});

module.exports = router;
