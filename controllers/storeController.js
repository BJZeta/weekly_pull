const Store = require('../models/stores');

module.exports = {
    findAll: function(req, res) {
        Store
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        Store
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        Store
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        Store
        .findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        Store
        .findByIdAndDelete({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));  
    }
}