exports.name = '/videos/vdcosplay';
exports.index = async(req, res, next) => {
    try {
        const vdcosplay = require('./data/json/vdcos.json');
        var video = vdcosplay[Math.floor(Math.random() * vdcosplay.length)].trim();
        res.jsonp({
            url: video,
            data: video,
            count: vdcosplay.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
