exports.name = '/images/imgbautroi';
exports.index = async(req, res, next) => {
    try {
        const imgbautroi = require('./data/json/imgbautroi.json');
        var image = imgbautroi[Math.floor(Math.random() * imgbautroi.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: imgbautroi.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}