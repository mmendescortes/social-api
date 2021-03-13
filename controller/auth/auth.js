module.exports = class auth {
	signin(req, res){
		let signin = require("./functions/signin");
		signin(req).then((r)=>{
			res.status(200);
			res.send(`{
				status: ${r[0]},
				message: ${r[1]}
			}`);
		});
	}
	signup(req, res){
		let signup = require("./functions/signup");
		signup(req).then((r)=>{
			r[0] ? res.status(201) : res.status(200);
			res.send(`{
				status: ${r[0]},
				message: ${r[1]}
			}`);
		});
	}
}