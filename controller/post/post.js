const jwt = require('jsonwebtoken');
module.exports = class post {
	constructor(id){
		this.id = id;
	}
	createPost(req, res, user){
		let createPost = require("./functions/create-post");
		jwt.verify(user.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(400);
				res.json({
					"errorCode": 400,
					"errorMessage": "There is no such ID!",
					"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-id-while-creating-post"
				});
			} else {
				createPost(user.user_id, req.body.content, req.files.map(n=>n.path)).then((r)=>{
					if(r[0]){
						res.status(201);
						res.json({
							status: r[0],
							message: "Post was created successfully!"
						});
					} else {
						res.status(500);
						res.json({
							status: r[0],
							message: "There was an error trying to create your post!"
						});
					}
				});
			}
		});
	}
	updatePost(req, res, user){
		let updatePost = require("./functions/update-post");
		let id = this.id;
		jwt.verify(user.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(400);
				res.json({
					"errorCode": 400,
					"errorMessage": "There is no such user ID!",
					"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-user-id-while-updating-post"
				});
			} else {
				jwt.verify(id, process.env.JWT_POST_SECRET, function(err, post) {
					if(err) {
						res.status(400);
						res.json({
							"errorCode": 400,
							"errorMessage": "There is no such post ID!",
							"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-post-id-while-updating-post"
						});
					} else {
						updatePost(user.user_id, post.post_id, req.body.content, req.files.map(n=>n.path)).then((r)=>{
							if(r[0]){
								res.status(201);
								res.json({
									status: r[0],
									message: "Post was updated successfully!"
								});
							} else {
								res.status(500);
								res.json({
									status: r[0],
									message: "There was an error trying to update your post!"
								});
							}
						});
					}
				});
			}
		});
	}
	deletePost(req, res, user){
		let deletePost = require("./functions/delete-post");
		let id = this.id;
		jwt.verify(user.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(400);
				res.json({
					"errorCode": 400,
					"errorMessage": "There is no such user ID!",
					"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-user-id-while-deleting-post"
				});
			} else {
				jwt.verify(id, process.env.JWT_POST_SECRET, function(err, post) {
					if(err) {
						res.status(400);
						res.json({
							"errorCode": 400,
							"errorMessage": "There is no such post ID!",
							"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-post-id-while-deleting-post"
						});
					} else {
						deletePost(user.user_id, post.post_id).then((r)=>{
							if(r[0]){
								res.status(200);
								res.json({
									status: r[0],
									message: "Post was deleted successfully!"
								});
							} else {
								res.status(500);
								res.json({
									status: r[0],
									message: "There was an error trying to delete your post!"
								});
							}
						});
					}
				});
			}
		});
	}
	getPost(req, res){
		let getPost = require("./functions/get-post");
		getPost(this.id).then((r)=>{
			if(r[0]){
				r[1].then((r) => {
					res.status(200);
					res.json({
						status: true,
						message: r[0]
					});
				});
			} else {
				res.status(404);
				res.json({
					status: r[0],
					message: "There is no such post!"
				});
			}
		});
	}
	getPosts(req, res){
		let getPosts = require("./functions/get-posts");
		getPosts().then((r)=>{
			if(r[0]){
				r[1].then((r) => {
					res.status(200);
					res.json({
						status: true,
						message: r
					});
				});
			} else {
				res.status(404);
				res.json({
					status: r[0],
					message: "There is no post!"
				});
			}
		});
	}
	getPostToken(req, res, user){
		let getPost = require("./functions/get-post");
		let id = this.id;
		jwt.verify(user.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(400);
				res.json({
					"errorCode": 400,
					"errorMessage": "There is no such user ID!",
					"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-user-id-while-requesting-post-token"
				});
			} else {
				getPost(id).then((r)=>{
					if(r[0]){
						r[1].then((r) => {
							res.status(200);
							res.json({
								status: true,
								message: jwt.sign({post_id: r[0]._id}, process.env.JWT_POST_SECRET, {expiresIn: 120000})
							});
						});
					} else {
						res.status(500);
						res.json({
							status: r[0],
							message: "There was an error trying to get your post token!"
						});
					}
				});
			}
		});
	}
}
