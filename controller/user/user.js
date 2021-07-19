const jwt = require('jsonwebtoken');
module.exports = class user {
	constructor(id){
		this.id = id;
	}
	changeEmail(req, res){
		let changeEmail = require("../../model/user/change-email");
		jwt.verify(this.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(500);
					res.json({
						"errorCode": 500,
						"errorMessage": "There is no such ID!",
						"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-id-while-changing-email"
					});
			} else {
				changeEmail(user.user_id, req.body.email).then((r)=>{
					status: r[0] ? res.status(200) : res.status(500);
					res.json({
						status: r[0],
						message: r[1]
					});
				});
			}
		});
	}
	changePassword(req, res){
		let changePassword = require("../../model/user/change-password");
		jwt.verify(this.id, process.env.JWT_USER_SECRET, function(err, user) {
			if(err) {
				res.status(500);
					res.json({
						"errorCode": 500,
						"errorMessage": "There is no such ID!",
						"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-id-while-changing-password"
					});
			} else {
				changePassword(user.user_id, req.body.password).then((r)=>{
					status: r[0] ? res.status(200) : res.status(500);
					res.json({
						status: r[0],
						message: r[1]
					});
				});
			}
		});
	}
}