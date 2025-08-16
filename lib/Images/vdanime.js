exports.name = '/videos/vdanime';
exports.index = async(req, res, next) => {
    try {
        const vdanime = require('./data/json/vdanime.json');
        var video = vdanime[Math.floor(Math.random() * vdanime.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdanime.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}