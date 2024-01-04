const handlerWebRoute = (req, res) => {
  const name = "Huy";
  return res.render("home.ejs", { name });
};

const handlerControllerPage = (req, res) => {
  return res.render("about.ejs")
};

module.exports = {
  handlerWebRoute,
  handlerControllerPage,
};
