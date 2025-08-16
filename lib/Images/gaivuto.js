exports.name = '/images/gaivuto';
exports.index = async(req, res, next) => {
    try {
        const gaivuto = require('./data/json/gaivuto.json');
        var image = gaivuto[Math.floor(Math.random() * gaivuto.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: gaivuto.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}