const workouts = require("../models/workout-model.js");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        workouts.find({}).then(function(data) {
            res.json(data)
        })
    })
    app.post("/api/workouts", function(req, res) {
        workouts.create(req.body).then(function(data) {
            res.json(data)
        })
    })
    app.put("/api/workouts/:id", function(req,res) {
        let id = req.params.id;
        workouts.updateOne({$push:{exercises:req.body}}).then(function(data) {
            res.json(data)
        })           
        
    })
    app.get("/api/workouts/range", function(req, res) {
        workouts.find({}).then(function(data) {
            res.json(data)
        })
    })
}