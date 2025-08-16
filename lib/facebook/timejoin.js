exports.name = '/facebook/timejoin';
const axios = require('axios');
//const huydev = require('../API_KEY/data/check.js').key_huydev;

exports.index = async (req, res, next) => {
  try {
      //if (huydev(req, res)) return;
     const token = "EAAD6V7os0gcBPM7JpjjmahZCJn56cmWSPBrVQuKZAL4ghYaEjIbSyFjFaw3YGaoj7ZAVvBRbw0S0pZBQEOLwdnKjmrYtt8745ByzWOUenl0v26dzYou7ttrEK6mGA9HSxZAkdcclAmQ4wIHKj3QzIvCoqPjm2a4VTCeQji7tHXWi1jwE0wy6dJGXn9knogRZB6rQZDZD";
    const { data } = await axios.get(`https://graph.facebook.com/v1.0/${req.query.uid}?fields=id,name,created_time&access_token=${token}`,
    {
        headers: {
         cookie: "c_user=100091372577959; xs=13:wh97xv8QZoYnew:2:1755369244:-1:-1; fr=0aegh40tDP8gydBRT.AWcl8thzqIEWvvyLBRvHhkR45cKn8YHIPW7xPpRixC_NufOFQCU.BooM8b..AAA.0.0.BooM8b.AWcxkCd2n_Mi7x4DCIBiOMHbVSs; datr=G8-gaK9-zKlL4QTo50An2wf4;"
        }
    });
    const createdTime = data.created_time;
    const day = createdTime.split("-")[2].split("T")[0];
    const month = createdTime.split("-")[1].split("T")[0];
    const year = createdTime.split("-")[0];
    const hour = createdTime.split("T")[1].split(":")[0];
    const min = createdTime.split(":")[1].split("+")[0];
    const ss = createdTime.split(":")[2].split("+")[0];
    const date = `${day}/${month}/${year}`;
    const time = `${hour}:${min}:${ss}`;
    res.json({
      uid: data.id,
      name: data.name,
      day: `${date}`,
      time: `${time}`,
      author: 'lechii'
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Tài khoàn die hoặc token api die vui lòng liên hệ admin' });
  }
};
