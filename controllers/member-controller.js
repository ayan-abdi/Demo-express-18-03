const memberModel = require('../models/member-model');

const memberController = {

    registerGet: (req, res) => {
        res.render('member/register');
    }, 

    registerPost: (req, res) => {
        const { email, pwd } = req.body; 

        console.log(email, pwd);

        res.redirect('/')
    }
};


module.exports = memberController;