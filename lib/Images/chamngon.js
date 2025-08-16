exports.name = '/text/chamngon';
exports.index = async(req, res, next) => {
    try {
        const chamngon = require('./data/json/chamngon.json');
        var text = chamngon[Math.floor(Math.random() * chamngon.length)].trim();
        res.jsonp({
            url: text,
            data: text,
            count: chamngon.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}