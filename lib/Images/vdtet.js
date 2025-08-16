exports.name = '/videos/vdtet';
exports.index = async(req, res, next) => {
    try {
        const vdtet = require('./data/json/vdtet.json');
        var video = vdtet[Math.floor(Math.random() * vdtet.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdtet.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}