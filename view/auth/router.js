var express = require('express');
var auth = require("../../controller/auth/auth");
var router = express.Router();
router.get('/auth/signin', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.put('/auth/signin', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.delete('/auth/signin', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.post('/auth/signin', function(req, res) {
	if(!Object.keys(req.body).length) {
		res.status(400);
		res.json({
			"errorCode": 400,
			"errorMessage": "Lacking needed parameters on request body!",
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "lacking-needed-parameters-on-request-body"
		});
	} else if(!req.body.username || !req.body.password) {
		let params = [req.body.username, req.body.password];
		let lackingParam = params.findIndex(param => !param === true) === 0 ? "username" : "password";
		res.status(400);
		res.json({
			"errorCode": 400,
			"errorMessage": `Lacking needed ${lackingParam} parameter!`,
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "lacking-needed-parameter-while-trying-to-signin"
		});
	} else {
		let authInstance = new auth();
		authInstance.signin(req, res);
	}
});
router.get('/auth/signup', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.put('/auth/signup', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.delete('/auth/signup', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.post('/auth/signup', function(req, res) {
	if(!Object.keys(req.body).length) {
		res.status(400);
		res.json({
			"errorCode": 400,
			"errorMessage": "Lacking needed parameters on request body!",
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "lacking-needed-parameters-on-request-body"
		});
	} else if(!req.body.username || !req.body.password || !req.body.email) {
		let params = [req.body.username, req.body.password, req.body.email];
		let lackingParam = params.findIndex(param => !param === true) > 0 ? params.findIndex(param => !param === true) > 1 ? "email" : "password" : "username";
		res.status(400);
		res.json({
			"errorCode": 400,
			"errorMessage": `Lacking needed ${lackingParam} parameter!`,
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "lacking-needed-parameter-while-trying-to-signup"
		});
	} else {
		let authInstance = new auth();
		authInstance.signup(req, res);
	}
});
module.exports = router;