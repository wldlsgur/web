const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../DB/db');

router.get('/login', function(req, res){
    var id = String(req.query.ID);
    var pw = String(req.query.PW);
    console.log(id);
    console.log(pw);
    var query = `SELECT * FROM user_info WHERE id = "${id}" AND password = "${pw}"`;
    db.query(query, function(err, data){
        console.log(data);
        if(err){
            res.send(err);
            return;
        }
        else if(data[0].id === id){
            res.redirect("/");
        }
        else{
            res.status(404);
        }
    });
});

module.exports = router;