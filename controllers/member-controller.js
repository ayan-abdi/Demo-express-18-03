const bcryt = require('bcrypt');
const memberModel = require('../models/member-model');

const memberController = {

    registerGet: (req, res) => {
        // Check si l'utilisateur est deja connecté
        if (req.session.connected) {
            return res.redirect('/');
        }
        res.render('member/register');
    },

    registerPost: (req, res) => {
        const { email, pwd, pseudo } = req.body;

        const passwordHash = bcryt.hashSync(pwd + process.env.PWD_PEPPER, 10);

        memberModel.insert({
            email, pseudo, passwordHash

        })
            .then((id) => {
                console.log(`Acount ${id} create !!!`);
                res.redirect('/');
            });

    },
    loginGet: (req, res) => {
        if (req.session.connected) {
            return res.redirect('/');
        }

        res.render('member/login');
    },

    // console.log(email, pwd, pseudo);
    loginPost: (req, res) => {
        const { email, pwd } = req.body;

        let memberDb = null;
        memberModel.getByEmail(email)
            .then(member => {  // .then nous permet de recuperer le member
                // Si le nombre est valide
                // console.log('Get By ID', req.body, member);
                if (member !== null) {
                    memberDb = member; // le member est valide alors on le comparer au (pwd, member, passwordhash)
                    return bcryt.compare(pwd + process.env.PWD_PEPPER, member.passwordHash);
                }

                return Promise.resolve(false);
            })

            .then(isOk => {
                // Le login est valide
                if (isOk) {
                    // Creer la session
                    req.session.connected = true;
                    req.session.member = {
                        memberId: memberDb.memberId,
                        pseudo: memberDb.pseudo
                    };

                    // Redirection
                    res.redirect('/');
                }
                // Le login est invalide
                else {
                    // Ajouter l'email dans la page login
                    res.render('member/login');
                }
            });
    },

    logout: (req, res) => {
        // Destruction de la session 
        req.session.destroy();

        // Redirection
        res.redirect('/');
    }
};


module.exports = memberController;