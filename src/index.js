const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const CRON = require("./utils/common/cron-job");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
// console.log(ServerConfig.PORT);
app.listen(ServerConfig.PORT, () => {
	console.log(`Server is running on port ${ServerConfig.PORT}`);
	CRON();
	// Logger.info("Server started");
});
