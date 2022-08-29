const db = require("../models");
const Toilet = db.toilets;
const Op = db.Sequelize.Op;

var msg;

// Create and Save a new paperdb
exports.create = (req, res) => {
  const toilet = {
    number: req.body.number,
    valid: req.body.valid,
    published: req.body.published ? req.body.published : false
  }
  // Validate request
  if (!toilet.number) {
    res.status(400).send({
      message: "number can not be empty!"
    });
    return
  }
  // Create paperdb
  Toilet.create(toilet)
  // request data from DB and send data using socket.io
    .then((data) => {
      msg = data;
      const socket = require('./socket.controller')(require('../../server').io, msg);
      socket;
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: (err.message) || "Some error occurred while creating the paperdb."
      });
    });
};
// Retrieve all paperdb from the database.
exports.findAll = (req, res) => {
  const number = req.query.number;
  var condition = number ? { number: { [Op.iLike]: `%${number}%` } } : null;
  Toilet.findAll({ where: condition })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          // err.message || "Some error occurred while retrieving paperdb."
          number
      });
    });
};
// Find a single paperdb with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Toilet.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find paperdb with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving paperdb with id=" + id
      });
    });
};
// Update a paperdb by the id in the request
exports.update = (req, res) => {
  const number = req.body.number;
  const valid = req.body.valid;

  //Validate update to real use
  if (valid) {
    Toilet.update(req.body, {
      where: { number: number }
    })
      .then(
        res.send({
          message: `Update ${number}s validate!`
        })
      )
  }
  Toilet.update(req.body, {
    where: { number: number }
  })
    .then(async num => {
      if (num == 1) {
        res.send({
          message: "paperdb was updated successfully."
        });
        await io.emit("realtime", req);
      } else {
        res.send({
          message: `Cannot update paperdb with number=${number}. Maybe paperdb was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating paperdb with number=" + number
      });
    });
};
// Delete a paperdb with the specified id in the request
exports.delete = (req, res) => {
  const number = req.body.number;
  Toilet.destroy({
    where: { number: number }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `${number} in paperdb was deleted successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete paperdb with number=${number}. Maybe paperdb was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete paperdb with number=" + number
      });
    });
};
// Delete all paperdb from the database.
exports.deleteAll = (req, res) => {
  Toilet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} paperdb were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all paperdb."
      });
    });
};
// Find all published paperdb
exports.findAllPublished = (req, res) => {
  Toilet.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving paperdb."
      });
    });
};