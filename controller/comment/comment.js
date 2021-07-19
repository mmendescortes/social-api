const jwt = require('jsonwebtoken');
module.exports = class comment {
	constructor(id){
		this.id = id;
	}
	createComment(req, res, user){
		let createComment = require("../../model/comment/create-comment");
		jwt.verify(user.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(400);
				res.json({
					"errorCode": 400,
					"errorMessage": "There is no such ID!",
					"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-id-while-creating-comment"
				});
			} else {
				createComment(user.user_id, req.params.object, req.body.content, req.files.map(n=>n.path)).then((r)=>{
					if(r[0]){
						res.status(201);
						res.json({
							status: r[0],
							message: "Comment was created successfully!"
						});
					} else {
						res.status(500);
						res.json({
							status: r[0],
							message: "There was an error trying to create your comment!"
						});
					}
				});
			}
		});
	}
	updateComment(req, res, user){
		let updateComment = require("../../model/comment/update-comment");
		let id = this.id;
		jwt.verify(user.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(400);
				res.json({
					"errorCode": 400,
					"errorMessage": "There is no such user ID!",
					"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-user-id-while-updating-comment"
				});
			} else {
				jwt.verify(id, process.env.JWT_COMMENT_SECRET, function(err, comment) {
					if(err) {
						res.status(400);
						res.json({
							"errorCode": 400,
							"errorMessage": "There is no such comment ID!",
							"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-comment-id-while-updating-comment"
						});
					} else {
						updateComment(user.user_id, comment.comment_id, req.body.content, req.files.map(n=>n.path)).then((r)=>{
							if(r[0]){
								res.status(201);
								res.json({
									status: r[0],
									message: "Comment was updated successfully!"
								});
							} else {
								res.status(500);
								res.json({
									status: r[0],
									message: "There was an error trying to update your comment!"
								});
							}
						});
					}
				});
			}
		});
	}
	deleteComment(req, res, user){
		let deleteComment = require("../../model/comment/delete-comment");
		let id = this.id;
		jwt.verify(user.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(400);
				res.json({
					"errorCode": 400,
					"errorMessage": "There is no such user ID!",
					"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-user-id-while-deleting-comment"
				});
			} else {
				jwt.verify(id, process.env.JWT_COMMENT_SECRET, function(err, comment) {
					if(err) {
						res.status(400);
						res.json({
							"errorCode": 400,
							"errorMessage": "There is no such comment ID!",
							"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-post-id-while-deleting-comment"
						});
					} else {
						deleteComment(user.user_id, comment.comment_id).then((r)=>{
							if(r[0]){
								res.status(200);
								res.json({
									status: r[0],
									message: "Comment was deleted successfully!"
								});
							} else {
								res.status(500);
								res.json({
									status: r[0],
									message: "There was an error trying to delete your comment!"
								});
							}
						});
					}
				});
			}
		});
	}
	getComment(req, res){
		let getComment = require("../../model/comment/get-comment");
		getComment(this.id).then((r)=>{
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
					message: "There is no such comment!"
				});
			}
		});
	}
	getComments(req, res){
		let getComments = require("../../model/comment/get-comments");
		getComments(req.params.object).then((r)=>{
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
					message: "There is no comment!"
				});
			}
		});
	}
	getCommentToken(req, res, user){
		let getComment = require("../../model/comment/get-comment");
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
				getComment(id).then((r)=>{
					if(r[0]){
						r[1].then((r) => {
							res.status(200);
							res.json({
								status: true,
								message: jwt.sign({comment_id: r[0]._id}, process.env.JWT_COMMENT_SECRET, {expiresIn: 120000})
							});
						});
					} else {
						res.status(500);
						res.json({
							status: r[0],
							message: "There was an error trying to get your comment token!"
						});
					}
				});
			}
		});
	}
}
