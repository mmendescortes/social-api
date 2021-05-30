var express = require('express');
var user = require("../../controller/user/user");
var router = express.Router();
router.get('/user/:id/password', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.post('/user/:id/password', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.delete('/user/:id/password', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.put('/user/:id/password', function(req, res) {
	if(!req.body.password) {
		res.status(400);
		res.json({
			"errorCode": 400,
			"errorMessage": `Lacking needed password parameter!`,
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "lacking-needed-password-parameter-while-trying-to-change-password"
		});
	} else {
		let userInstance = new user(req.params.id);
		userInstance.changePassword(req, res);
	}
});
router.get('/user/:id/email', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.post('/user/:id/email', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.delete('/user/:id/email', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.put('/user/:id/email', function(req, res) {
	if(!req.body.email) {
		res.status(400);
		res.json({
			"errorCode": 400,
			"errorMessage": `Lacking needed email parameter!`,
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "lacking-needed-email-parameter-while-trying-to-change-email"
		});
	} else {
		let userInstance = new user(req.params.id);
		userInstance.changeEmail(req, res);
	}
});
module.exports = router;