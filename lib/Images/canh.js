exports.name = '/images/canh';
exports.index = async(req, res, next) => {
    try {
        const canh = require('./data/json/canh.json');
        var image = canh[Math.floor(Math.random() * canh.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: canh.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
const axios = require('axios');

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
};

exports.name = '/images/canh';
exports.index = async(req, res, next) => {
    try {
        const canh = require('./data/json/canh.json');
        var image = canh[Math.floor(Math.random() * canh.length)].trim();
        
        // Optional: Verify the image URL is accessible with headers
        // await axios.get(image, { headers });
        
        res.jsonp({
            url: image,
            data: image,
            count: canh.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
