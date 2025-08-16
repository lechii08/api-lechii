exports.name = '/videos/vdsexy';
exports.index = async(req, res, next) => {
    try {
        const vdsexy = require('./data/json/vdsexy.json');
        var video = vdsexy[Math.floor(Math.random() * vdsexy.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdsexy.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}