// TODO update this to persist data in MongoDB!

const URL = require("../model/URL");

class URLDao {

  async create({ url, short }) {
    const url1 = await URL.create({ url, short });
    return url1;
  }


  // returns an empty array if there is no URL with the given short
  async read(short1) {
    const url1 = await URL.findOne({ short: short1}).exec();
    return url1 ? url1 : [];
  }

}

module.exports = URLDao;