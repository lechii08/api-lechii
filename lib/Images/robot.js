exports.name = '/images/robot';
exports.index = async(req, res, next) => {
    try {
        const robot = require('./data/json/robot.json');
        var image = robot[Math.floor(Math.random() * robot.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: robot.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}