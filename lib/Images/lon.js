exports.name = '/images/lon';
exports.index = async(req, res, next) => {
    try {
        const lon = require('./data/json/lon.json');
        var image = lon[Math.floor(Math.random() * lon.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: lon.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}