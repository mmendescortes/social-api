const express = require('express');
const user = require("../../controller/user/user");
const post = require("../../controller/post/post");
const utilsFileUpload = require('../../utils/file/upload/upload');
const fileUpload = new utilsFileUpload("user_data", [".png", ".jpeg", ".jpg"], 200);
var router = express.Router();
router.get('/user/:id/post/:post', function(req, res) {
	let userInstance = new user(req.params.id);
	let postInstance = new post(req.params.post);
	postInstance.getPostToken(req, res, userInstance);
});
router.post('/user/:id/post/:post', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "GET PUT DELETE"
	});
});
router.put('/user/:id/post/:post', function(req, res) {
	let userInstance = new user(req.params.id);
	/* here the post is actually a post token */
	let postInstance = new post(req.params.post);
	postInstance.updatePost(req, res, userInstance);
});
router.delete('/user/:id/post/:post', function(req, res) {
	let userInstance = new user(req.params.id);
	/* here the post is actually a post token */
	let postInstance = new post(req.params.post);
	postInstance.deletePost(req, res, userInstance);
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
router.delete('/user/:id/post', function(req, res) {
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
			"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "unsuported-file-type-while-creating-post"
		});
	} else {
		let userInstance = new user(req.params.id);
		let postInstance = new post();
		postInstance.createPost(req, res, userInstance);
	}
});
router.get('/post/:id', function(req, res) {
	let postInstance = new post(req.params.id);
	postInstance.getPost(req, res);
});
router.put('/post/:id', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "GET"
	});
});
router.delete('/post/:id', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "GET"
	});
});
router.post('/post/:id', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "GET"
	});
});
router.get('/posts', function(req, res) {
	let postInstance = new post();
	postInstance.getPosts(req, res);
});
router.put('/posts', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "GET"
	});
});
router.delete('/posts', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "GET"
	});
});
router.post('/posts', function(req, res) {
	res.status(405);
	res.json({
		"errorCode": 405,
		"errorMessage": "Unsuported method used!",
		"supportedMethods": "GET"
	});
});
module.exports = router;