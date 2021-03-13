var express = require('express');
var auth = require("../../controller/auth/auth");
var router = express.Router();
router.get('/auth/signin', function(req, res) {
	res.status(405);
	res.send(`{
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	}`);
});
router.put('/auth/signin', function(req, res) {
	res.status(405);
	res.send(`{
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	}`);
});
router.delete('/auth/signin', function(req, res) {
	res.status(405);
	res.send(`{
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	}`);
});
router.post('/auth/signin', function(req, res) {
	let authInstance = new auth();
	authInstance.signin(req, res);
});
router.get('/auth/signup', function(req, res) {
	res.status(405);
	res.send(`{
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	}`);
});
router.put('/auth/signup', function(req, res) {
	res.status(405);
	res.send(`{
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	}`);
});
router.delete('/auth/signup', function(req, res) {
	res.status(405);
	res.send(`{
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	}`);
});
router.post('/auth/signup', function(req, res) {
	let authInstance = new auth();
	authInstance.signup(req, res);
});
module.exports = router;