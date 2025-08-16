exports.name = '/videos/vdgai';
exports.index = async(req, res, next) => {
    try {
        const vdgai = require('./data/json/vdgai.json');
        var video = vdgai[Math.floor(Math.random() * vdgai.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdgai.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}