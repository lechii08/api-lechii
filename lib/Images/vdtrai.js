exports.name = '/videos/vdtrai';
exports.index = async(req, res, next) => {
    try {
        const vdtrai = require('./data/json/vdtrai.json');
        var video = vdtrai[Math.floor(Math.random() * vdtrai.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdtrai.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}