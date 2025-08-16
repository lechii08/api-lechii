exports.name = '/images/nuaodai';
exports.index = async(req, res, next) => {
    try {
        const nuaodai = require('./data/json/nuaodai.json');
        var image = nuaodai[Math.floor(Math.random() * nuaodai.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: nuaodai.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}