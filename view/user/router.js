var express = require('express');
var user = require("../../controller/user/user");
var router = express.Router();
router.get('/user/password', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.post('/user/password', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.delete('/user/password', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.put('/user/password', function(req, res) {
	let userInstance = new user(req.body.id);
	userInstance.changePassword(req, res);
});
router.get('/user/email', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.post('/user/email', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.delete('/user/email', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "PUT"
	});
});
router.put('/user/email', function(req, res) {
	let userInstance = new user(req.body.id);
	userInstance.changeEmail(req, res);
});
module.exports = router;