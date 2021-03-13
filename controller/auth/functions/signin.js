module.exports = (req) => {
	const sql4me = require("../../../vendor/sql4me/sql4me");
	const sql4auth = require("../../../vendor/sql4auth/sql4auth");
	const auth4me = require("../../../vendor/auth4me/auth4me");
	const engine = new sql4me(process.env.MYSQL_HOST, process.env.MYSQL_USER, process.env.MYSQL_PASS);
	const provider = new sql4auth(engine);
	const auth = new auth4me(provider);
	return auth.signin(req.body.username, req.body.password);
};