import winston from "winston";
import getBasePath from "../utils/getBasePath.js";

const basePath = getBasePath();
const logger = new winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.prettyPrint()
    ),
    transports: [
        new winston.transports.File(
            {
                filename: `${basePath}/logs/log-${new Date().toISOString()}.log`,
            },
            { timestamp: true }
        ),
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: `${basePath}/logs/exception-${new Date().toISOString()}.log`,
        }),
    ],
    rejectionHandlers: [
        new winston.transports.File({
            filename: `${basePath}/logs/rejection-${new Date().toISOString()}.log`,
        }),
    ],
});

logger.on("finish", function (info) {
    console.log("Log dumped", info);
});

export default logger;
