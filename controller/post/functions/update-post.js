const ObjectId = require('mongodb').ObjectId;
module.exports = async (userID, postID, privacy, content, media) => {
	const mongo4me = require("../../../vendor/mongo4me/mongo4me");
	const engine = new mongo4me(process.env.MONGO_URI);
	return engine.update(process.env.MONGO_DB, process.env.MONGO_POSTS_COLLECTION, {"_id": ObjectId(postID), "owner": userID}, {$set: {"content": content, "media": media}}, {upsert: false});
};