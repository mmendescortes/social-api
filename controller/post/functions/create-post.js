module.exports = async (userID, content, media) => {
	const mongo4me = require("../../../vendor/mongo4me/mongo4me");
	const engine = new mongo4me(process.env.MONGO_URI);
	media = media === "false" ? false : media;
	return engine.insert(process.env.MONGO_DB, process.env.MONGO_POSTS_COLLECTION, [{"owner": userID, "content": content, "media": media}]);
};