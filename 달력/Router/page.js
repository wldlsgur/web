const express = require('express');
const router = express.Router();

router.get('/user', function(req, res){
    res.render('createuser.html');
});

module.exports = router;