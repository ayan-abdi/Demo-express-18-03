const memberController = require('../controllers/member-controller');

const memberRouter = require('express').Router();


memberRouter.get('/member/register', memberController.registerGet);
memberRouter.post('/member/register', memberController.registerPost);
// les routes de ma page login
memberRouter.get('/member/login', memberController.loginGet);
memberRouter.post('/member/login', memberController.loginPost);

memberRouter.get('/member/logout', memberController.logout);

module.exports = memberRouter;