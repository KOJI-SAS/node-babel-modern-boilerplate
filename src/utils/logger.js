import winston from 'winston';
import path from 'path';
import fs from 'fs';

const LOG_DIR = 'logs';

const LOG_FORMAT = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.label({
    label: process.env.APP_NAME,
  }),
  winston.format.printf(({ timestamp, label, level, message, stack }) => {
    let result = `${timestamp} - ${label}:[${level}]: ${message}`;
    if (stack) {
      result += `\n${stack}`;
    }
    return result;
  })
);

const LOG_FILE_CONFIG = {
  maxsize: 5242880,
};

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

const logger = winston.createLogger({
  level: 'info',
  format: LOG_FORMAT,
  transports: [
    new winston.transports.File({ filename: path.join(LOG_DIR, 'error.log'), level: 'error', ...LOG_FILE_CONFIG }),
    new winston.transports.File({ filename: path.join(LOG_DIR, 'combined.log'), ...LOG_FILE_CONFIG }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
logger.add(
  new winston.transports.Console({
    level: process.env.NODE_ENV === 'production' ? 'error' : 'verbose',
    format: winston.format.combine(winston.format.colorize(), LOG_FORMAT),
  })
);

export default logger;
