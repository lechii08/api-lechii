exports.name = '/images/gainga';
exports.index = async(req, res, next) => {
    try {
        const gainga = require('./data/json/gainga.json');
        var image = gainga[Math.floor(Math.random() * gainga.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: gainga.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}