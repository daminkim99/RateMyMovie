//renders the main homepage 
module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs", {activeLink:'home'});
    },
  };