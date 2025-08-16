exports.name = '/videos/vdchill';
exports.index = async(req, res, next) => {
    try {
        const vdchill = require('./data/json/vdchill.json');
        var video = vdchill[Math.floor(Math.random() * vdchill.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdchill.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}