var express = require('express');
var router = express.Router();

var skillsCtrl = require ('../controllers/skills');

// All actual paths start with "/skills"

router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);

module.exports = router;
