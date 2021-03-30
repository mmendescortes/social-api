var express = require('express');
var user = require("../../controller/user/user");
var post = require("../../controller/post/post");
var router = express.Router();
router.get('/user/:id/post/:post', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "DELETE"
	});
});
router.put('/user/:id/post/:post', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "DELETE"
	});
});
router.post('/user/:id/post/:post', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "DELETE"
	});
});
router.delete('/user/:id/post/:post', function(req, res) {
	let userInstance = new user(req.params.id);
	let postInstance = new post(userInstance);
	postInstance.deletePost(req, res);
});
router.get('/user/:id/post', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.put('/user/:id/post', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.put('/user/:id/post', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "POST"
	});
});
router.post('/user/:id/post', function(req, res) {
	let userInstance = new user(req.params.id);
	let postInstance = new post(userInstance);
	postInstance.createPost(req, res);
});
module.exports = router;