const express = require('express');
const user = require("../../controller/user/user");
const post = require("../../controller/post/post");
const utilsFileUpload = require('../../utils/file/upload/upload');
const fileUpload = new utilsFileUpload("user_data", [".png", ".jpeg", ".jpg"], 200);
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
router.post('/user/:id/post', fileUpload.action(), function(req, res) {
	if(req.fileValidationError) {
		res.status(400);
		res.json({
			"errorCode": 400,
			"errorMessage": "Unsuported file type!",
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "Unsuported-file-type-while-creating-post"
		});
	} else {
		let userInstance = new user(req.params.id);
		let postInstance = new post(userInstance);
		postInstance.createPost(req, res);
	}
});
module.exports = router;