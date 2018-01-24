

var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        var query = {};
        if (req.query.team_id) {
            query.TeamId = req.query.team_id;
        }
        db.Team.findAll({}).then(function (dbTeam) {
            res.json(dbTeam);
        });
    });


    // POST route for saving a new post
    app.post("/post", function (req, res) {
        db.Team.create(req.body).then(function (dbTeam) {
            res.json(dbTeam);
        });
    });

};
