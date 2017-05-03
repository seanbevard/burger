/*require dependencies and initialize router*/
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgersObject = {
      burger: data
    };
    res.render("index", burgersObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

/*the 'put' is going to devour the burger by 
setting the devoured value to 1 where the id matches
then refreshes the page*/
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});
// Export routes for server.js to use.
module.exports = router;