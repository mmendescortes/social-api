module.exports = async (commentID) => {
	const ObjectId = require("mongodb").ObjectId;
	const mongo4me = require("../../../vendor/mongo4me/mongo4me");
	const engine = new mongo4me(process.env.MONGO_URI);
	return engine.select(process.env.MONGO_DB, process.env.MONGO_COMMENTS_COLLECTION, {"_id": ObjectId(commentID)});
};