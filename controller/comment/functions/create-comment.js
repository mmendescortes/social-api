module.exports = async (userID, objectID, content, media) => {
	const mongo4me = require("../../../vendor/mongo4me/mongo4me");
	const engine = new mongo4me(process.env.MONGO_URI);
	return engine.insert(process.env.MONGO_DB, process.env.MONGO_COMMENTS_COLLECTION, [{"owner": userID, "object": objectID, "content": content, "media": media}]);
};