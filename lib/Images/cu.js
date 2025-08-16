exports.name = '/images/cu';
exports.index = async(req, res, next) => {
    try {
        const cu = require('./data/json/cu.json');
        var image = cu[Math.floor(Math.random() * cu.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: cu.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}