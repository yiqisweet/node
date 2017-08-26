var express = require('express');
var router = express.Router();





router.post('update',function(req,res){
	console.log(req.body.id),
	console.log(req.body.name);
})

router.post('insert',function(req,res){
		console.log(req.body.id),
	console.log(req.body.name);
})







module.exports = router;
