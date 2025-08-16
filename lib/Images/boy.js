const axios = require('axios');

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
};

exports.name = '/images/boy';
exports.index = async(req, res, next) => {
    try {
        const boy = require('./data/json/boy.json');
        var image = boy[Math.floor(Math.random() * boy.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: boy.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}