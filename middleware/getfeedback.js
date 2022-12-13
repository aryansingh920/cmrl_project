const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const feedback_passenger = require("../database/database.js").feedback;

module.exports.getfeedback = async (req, res) => {
    const all_feedbacks = await feedback_passenger.find({});
    console.log(all_feedbacks);

    const csvWriter = createCsvWriter({
        path: 'all_feedbacks.csv',
        header: [
            {
                id: 'date',
                title: 'Date And Time'
            },
            {
                id: 'station',
                title: 'Station'
            },
            {
                id: 'username',
                title: 'Username'
            },
            {
                id: 'gender',
                title: 'Gender'
            },
            {
                id: 'mobile',
                title: 'Mobile'
            },
            {
                id: 'empStatus',
                title: 'Employement Status'
            },
            {
                id: 'age',
                title: 'Age'
            },
            {
                id: 'duration',
                title: 'Duration'
            },
            {
                id: 'distance',
                title: 'Distance'
            },
            {
                id: 'commute',
                title: 'Commute'
            },
            {
                id: 'cleanliness',
                title: 'Cleanliness'
            },
            {
                id: 'support',
                title: 'Support'
            },
            {
                id: 'safety',
                title: 'Safety'
            },
            {
                id: 'otherSuggestion',
                title: 'Other Suggestions'
            },


        ]
    });


    csvWriter.writeRecords(all_feedbacks) // returns a promise
        .then(() => {
            console.log('...Done');
        });
    res.send(all_feedbacks);

}