module.exports = async (userID, postID) => {
	const ObjectId = require("mongodb").ObjectId;
	const mongo4me = require("../../../vendor/mongo4me/mongo4me");
	const engine = new mongo4me(process.env.MONGO_URI);
	return engine.delete(process.env.MONGO_DB, process.env.MONGO_POSTS_COLLECTION, {"_id": ObjectId(postID), "owner": userID});
};