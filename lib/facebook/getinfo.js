exports.name = '/facebook/getinfo';
const axios = require('axios')
//const huydev = require('../API_KEY/data/check.js').key_huydev;
function convert(time){
  var date = new Date(`${time}`);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var formattedDate = `${ day < 10 ? "0" + day : day}` + "/" +`${ month < 10 ? "0" + month : month}` + "/" + year + "||" + `${ hours < 10 ? "0" + hours : hours}` + ":" + `${ minutes < 10 ? "0" + minutes : minutes}` + ":" + `${ seconds < 10 ? "0" + seconds : seconds}`;
return formattedDate;
}
exports.index = async (req, res, next) => {
    //if (huydev(req, res)) return;
  const axios = require("axios");
   const token = "EAAD6V7os0gcBPM7JpjjmahZCJn56cmWSPBrVQuKZAL4ghYaEjIbSyFjFaw3YGaoj7ZAVvBRbw0S0pZBQEOLwdnKjmrYtt8745ByzWOUenl0v26dzYou7ttrEK6mGA9HSxZAkdcclAmQ4wIHKj3QzIvCoqPjm2a4VTCeQji7tHXWi1jwE0wy6dJGXn9knogRZB6rQZDZD";
axios.get(`https://graph.facebook.com/v1.0/${req.query.uid}?fields=id,is_verified,cover,created_time,work,hometown,username,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${token}`,{
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
          "accept": "application/json, text/plain, /",
         cookie: "c_user=100091372577959; xs=13:wh97xv8QZoYnew:2:1755369244:-1:-1; fr=0aegh40tDP8gydBRT.AWcl8thzqIEWvvyLBRvHhkR45cKn8YHIPW7xPpRixC_NufOFQCU.BooM8b..AAA.0.0.BooM8b.AWcxkCd2n_Mi7x4DCIBiOMHbVSs; datr=G8-gaK9-zKlL4QTo50An2wf4;"
        }
      }).then(resp => {

  var dj = {
    name: resp.data.name,
    link_profile: resp.data.link,
    uid: resp.data.id,
    first_name: resp.data.first_name,
    username: resp.data.username,
    created_time : convert(resp.data.created_time),
    web: resp.data.website || "Không có dữ liệu!",
    gender: resp.data.gender,
    relationship_status: resp.data.relationship_status || "Không có dữ liệu!",
    love: resp.data.significant_other || "Không có",
    birthday: resp.data.birthday || "Sinh nhật private", 
    follower: resp.data.subscribers.summary.total_count || "Không công khai",
    tichxanh: resp.data.is_verified,
    avatar: `https://graph.facebook.com/${resp.data.id}/picture?width=1500&height=1500&access_token=2712477385668128%7Cb429aeb53369951d411e1cae8e810640`,
    quotes: resp.data.quotes || "Không có dữ liệu!",
    about: resp.data.about || "Không có dữ liệu!",
    locale: resp.data.locale,
    location: !!resp.data.location?resp.data.location.name:undefined,
    hometown: !!resp.data.hometown?resp.data.hometown.name:undefined,
    cover : !!resp.data.source?resp.data.source:undefined,
    work: resp.data.work,
    author: "https://www.facebook.com/lechi08"
  }
  res.json(dj)
}).catch(e =>{
  console.log(e)
  res.status(500).json({ error: 'Tài khoàn die hoặc token api die vui lòng liên hệ admin' });
})
          }
