module.exports = class user {
	constructor(id){
		this.id = id;
	}
	changeEmail(req, res){
		let changeEmail = require("./functions/change-email");
		changeEmail(this.id, req.body.email).then((r)=>{
			res.status(200);
			res.send(`{
				status: ${r[0]},
				message: ${r[1]}
			}`);
		});
	}
	changePassword(req, res){
		let changePassword = require("./functions/change-password");
		changePassword(this.id, req.body.password).then((r)=>{
			res.status(200);
			res.send(`{
				status: ${r[0]},
				message: ${r[1]}
			}`);
		});
	}
}