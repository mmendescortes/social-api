const jwt = require('jsonwebtoken');
module.exports = class auth {
	signin(req, res){
		let signin = require("../../model/auth/signin");
		signin(req).then((r)=>{
			if(r[0]) {
				res.status(200);
				res.json({
					status: r[0],
					message: jwt.sign({user_id: r[1]}, process.env.JWT_USER_SECRET, {expiresIn: 86400})
				});
			} else {
				res.status(401);
				res.json({
					status: r[0],
					message: r[1]
				});
			}
		});
	}
	signup(req, res){
		let signup = require("../../model/auth/signup");
		signup(req).then((r)=>{
			r[0] ? res.status(201) : res.status(400);
			res.json({
				status: r[0],
				message: r[1]
			});
		});
	}
}