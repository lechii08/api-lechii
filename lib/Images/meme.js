exports.name = '/images/meme';
exports.index = async(req, res, next) => {
    try {
        const meme = require('./data/json/meme.json');
        var image = meme[Math.floor(Math.random() * meme.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: meme.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}