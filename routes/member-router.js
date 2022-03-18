const memberController = require('../controllers/member-controller');

const memberRouter = require('express').Router();


memberRouter.get('/register', memberController.registerGet);
memberRouter.post('/register', memberController.registerPost);


module.exports = memberRouter;