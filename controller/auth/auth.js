const jwt = require('jsonwebtoken');
module.exports = class auth {
	signin(req, res){
		let signin = require("./functions/signin");
		signin(req).then((r)=>{
			r[1] = r[0] ? jwt.sign({user_id: r[1]}, process.env.JWT_USER_SECRET, {expiresIn: 86400}) : r[1];
			res.status(200);
			res.json({
				status: r[0],
				message: r[1]
			});
		});
	}
	signup(req, res){
		let signup = require("./functions/signup");
		signup(req).then((r)=>{
			r[0] ? res.status(201) : res.status(200);
			res.json({
				status: r[0],
				message: r[1]
			});
		});
	}
}