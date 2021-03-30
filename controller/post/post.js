const jwt = require('jsonwebtoken');
module.exports = class post {
	constructor(user){
		this.id = user.id;
	}
	createPost(req, res){
		let createPost = require("./functions/create-post");
		jwt.verify(this.id, process.env.JWT_USER_SECRET, function(err, id) {
			if(err) {
				res.status(500);
					res.json({
						"errorCode": 500,
						"errorMessage": "There is no such ID!",
						"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-id-while-creating-post"
					});
			} else {
				createPost(id.user_id, req.body.content, req.body.media).then((r)=>{
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
	deletePost(req, res){
		let deletePost = require("./functions/delete-post");
		jwt.verify(this.id, process.env.JWT_USER_SECRET, function(err, id) {
			if(err) {
				res.status(500);
					res.json({
						"errorCode": 500,
						"errorMessage": "There is no such ID!",
						"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-id-while-deleting-post"
					});
			} else {
				deletePost(req.params.post).then((r)=>{
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
}