module.exports = class user {
	constructor(id){
		this.id = id;
	}
	changeEmail(req, res){
		let changeEmail = require("./functions/change-email");
		jwt.verify(this.id, process.env.JWT_USER_SECRET, function(err, id) {
			if(err) {
				res.status(500);
					res.json({
						"errorCode": 500,
						"errorMessage": "There is no such ID!",
						"errorSolution": process.env.SUPPORT_DOMAIN + "no-such-id-while-changing-email"
					});
			} else {
				changeEmail(id, req.body.email).then((r)=>{
					res.status(200);
					res.json({
						status: r[0],
						message: r[1]
					});
				});
			}
		});
	}
	changePassword(req, res){
		let changePassword = require("./functions/change-password");
		jwt.verify(this.id, process.env.JWT_USER_SECRET, function(err, id) {
			if(err) {
				res.status(500);
					res.json({
						"errorCode": 500,
						"errorMessage": "There is no such ID!",
						"errorSolution": process.env.DEV_SUPPORT_DOMAIN + "no-such-id-while-changing-password"
					});
			} else {
				changePassword(id, req.body.password).then((r)=>{
					res.status(200);
					res.json({
						status: r[0],
						message: r[1]
					});
				});
			}
		});
	}
}