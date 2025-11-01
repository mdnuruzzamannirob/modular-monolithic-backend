import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import router from "./routes";
import requestId from "./middlewares/requestId.middleware";
import errorHandler from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));
app.use(requestId);

// routes handler
app.use("/api/v1", router);

// error handler
app.use(errorHandler);

export default app;
