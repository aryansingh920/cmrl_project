const feedback_passenger = require("../database/database.js").feedback;

module.exports.feedback = async (req, res) => {
    const newfeedback = new feedback_passenger({
        date:req.body.date,
        station:req.body.station,
        username: req.body.username,
        gender: req.body.gender,
        mobile: req.body.mobile,
        empStatus: req.body.empStatus,
        age: req.body.age,
        duration: req.body.duration,
        distance: req.body.distance,
        commute: req.body.commute,
        service: req.body.service,
        cleanliness: req.body.cleanliness,
        support: req.body.support,
        safety: req.body.safety,
        otherSuggestion: req.body.otherSuggestion,
    });
    await newfeedback.save().then((r) => {
        console.log(r,"Added in DB")
    }).catch(err => {
        console.log(err,"error")
    });
}