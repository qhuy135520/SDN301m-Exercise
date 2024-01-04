import db from "../models/index";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homePage.ejs", {
      data: JSON.stringify(data)
    });
  } catch (e) {
    console.log(e);
  }
};
let getTestView = (req, res) => {
  return res.render("test/testView.ejs");
};
module.exports = {
  getHomePage: getHomePage,
  getTestView: getTestView,
};
