var dataModel = require('./dataModel');

module.exports.getDataFromDBService = () => {
    return new Promise((resolve, reject) => {
        dataModel.find({})
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
