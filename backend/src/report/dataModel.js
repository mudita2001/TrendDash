var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repSchema = new Schema({
    endYear: {
        type: Number
    },
    intensity: {
        type: Number
    },
    sector: {
        type: String
    },
    topic: {
        type: String
    },
    insight: {
        type: String
    },
    url: {
        type: String
    },
    region: {
        type: String
    },
    startYear: {
        type: Number
    },
    impact: {
        type: Number
    },
    added: {
        type: String
    },
    published: {
        type: String
    },
    country: {
        type: String
    },
    relevance: {
        type: Number
    },
    postle: {
        type: String
    },
    source: {
        type: String
    },
    title: {
        type: String
    },
    likelihood: {
        type: Number
    }
});

module.exports = mongoose.model('reports', repSchema);