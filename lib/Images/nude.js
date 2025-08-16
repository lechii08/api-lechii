exports.name = '/images/nude';
exports.index = async(req, res, next) => {
    try {
        const nude = require('./data/json/nude.json');
        var image = nude[Math.floor(Math.random() * nude.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: nude.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}