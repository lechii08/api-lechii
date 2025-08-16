exports.name = '/images/gaiditbu';
exports.index = async(req, res, next) => {
    try {
        const gaiditbu = require('./data/json/gaiditbu.json');
        var image = gaiditbu[Math.floor(Math.random() * gaiditbu.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: gaiditbu.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}