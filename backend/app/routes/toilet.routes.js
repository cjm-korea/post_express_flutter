module.exports = app => {
    const toilets = require("../controllers/toilet.controller.js");
    var router = require("express").Router();
    // Create a new paperdb
    router.post("/", toilets.create);
    // Retrieve all paperdb
    router.get("/", toilets.findAll);
    // Retrieve all published paperdb
    router.get("/published", toilets.findAllPublished);
    // Retrieve a single paperdb with id
    router.get("/:number", toilets.findOne);
    // Update a paperdb with id
    router.put("/:number", toilets.update);
    // Delete a paperdb with id
    router.delete("/:number", toilets.delete);
    // Create a new paperdb
    router.delete("/", toilets.deleteAll);
    app.use('/api/toilets', router);
  };