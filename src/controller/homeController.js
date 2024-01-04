const handlerWebRoute = (req, res) => {
  const name = "Huy";
  return res.render("home.ejs", { name });
};

const handlerControllerPage = (req, res) => {};

module.exports = {
  handlerWebRoute,
  handlerControllerPage,
};
