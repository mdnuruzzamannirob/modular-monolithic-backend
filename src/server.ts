import app from "./app";
import { connectDB } from "./config/db.config";
import { ENV } from "./config/env.config";
import { logger } from "./utils/logger";

connectDB(ENV.MONGO_URI);

app.listen(ENV.PORT, () => {
  logger.info(`🚀 Server running on port ${ENV.PORT}`);
});
