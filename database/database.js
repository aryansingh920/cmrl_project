const feedback = require('../schemas/feedback.js');
const admin = require('../schemas/admin.js');


const database = {
    feedback: feedback,
    admin: admin,
}

module.exports = database;