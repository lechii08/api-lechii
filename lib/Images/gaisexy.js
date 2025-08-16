const axios = require('axios');

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
};

exports.name = '/images/gaisexy';
exports.index = async(req, res, next) => {
    try {
        const gaisexy = require('./data/json/gaisexy.json');
        var image = gaisexy[Math.floor(Math.random() * gaisexy.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: gaisexy.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}