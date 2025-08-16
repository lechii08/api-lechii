const axios = require('axios');

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
};

exports.name = '/images/couple';
exports.index = async(req, res, next) => {
    try {
        const couple = require('./data/json/couple.json');
        var image = couple[Math.floor(Math.random() * couple.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: couple.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}