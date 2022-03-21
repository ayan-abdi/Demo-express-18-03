const homeController = {

    index:(req, res) => {
        console.log(req.session);
        res.render('home/index');
    }
};

module.exports = homeController;