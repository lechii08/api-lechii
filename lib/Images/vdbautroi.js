exports.name = '/videos/vdbautroi';
exports.index = async(req, res, next) => {
    try {
        const vdbautroi = require('./data/json/vdbautroi.json');
        var video = vdbautroi[Math.floor(Math.random() * vdbautroi.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdbautroi.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}