const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../DB/db');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/user', function(req, res){
    var post = req.body;
    var name = post.NAME;
    var id = post.ID;
    var pw = post.PW;
    
    console.log(name);
    console.log(id);
    console.log(pw);

    var query = `INSERT INTO user_info(id,password,name) VALUES("${id}","${pw}","${name}")`;
    db.query(query, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.redirect("/");
        }
    });
})
module.exports = router;