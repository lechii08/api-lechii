// const huydev = require('../API_KEY/data/check.js').key_huydev;
exports.name = '/facebook/getinfov2';
const axios = require('axios');

exports.index = async (req, res, next) => {
  try {
      //if ((req, res)) return;
    const token = "EAAD6V7os0gcBPM7JpjjmahZCJn56cmWSPBrVQuKZAL4ghYaEjIbSyFjFaw3YGaoj7ZAVvBRbw0S0pZBQEOLwdnKjmrYtt8745ByzWOUenl0v26dzYou7ttrEK6mGA9HSxZAkdcclAmQ4wIHKj3QzIvCoqPjm2a4VTCeQji7tHXWi1jwE0wy6dJGXn9knogRZB6rQZDZD";

    const uid = req.query.uid;
    if (!uid) return res.status(400).json({ error: 'thiếu uid.' });

    const response = await axios.get(`https://graph.facebook.com/${uid}?fields=id,is_verified,cover,updated_time,work,education,likes,created_time,work,posts,hometown,username,family,timezone,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${token}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Tài khoàn die hoặc token api die vui lòng liên hệ admin.' });
  }
};
