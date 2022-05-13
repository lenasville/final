const express = require('express');
const upload=require('../middleware/upload');
const controller = require('../controllers/category');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt',{session:false}),controller.getAll);

router.get('/:id', passport.authenticate('jwt',{session:false}),controller.getById);

router.delete('/:id', passport.authenticate('jwt',{session:false}),controller.delete);

router.post('/', passport.authenticate('jwt',{session:false}),controller.create);

router.patch('/', passport.authenticate('jwt',{session:false}),controller.update);


router.get('/:id', controller.getById);

router.delete('/:id', controller.delete);

router.post('/', upload.single('image'), controller.create);
router.patch('/:id', upload.single('image'), controller.update);

module.exports = router;