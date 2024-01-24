var dataService = require('./dataService');



var getData = async (req, res) => {
    var repDetails = await dataService.getDataFromDBService();
    res.send({ "status": true, "data": repDetails });
}

module.exports = { getData };