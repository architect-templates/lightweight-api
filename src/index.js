/* eslint-disable no-console */
const express = require('express');
const winston = require('winston');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const start = async () => {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'api' },
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: `${__dirname}/../logs/backend.log` }),
    ],
  });

  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled rejection at ', promise, `reason: ${reason.message}`);
    process.exit(1);
  });

  // Choose a random quote from array
  let indx = 0;
  app.get('/', async (req, res) => {
    logger.info('GET /');
    const arr = ['Awesome!', 'Good Job!', 'Well Done!'];
    indx += 1;
    if (indx > 2) indx = 0;
    return res.status(200).json({ quote: arr[indx] });
  });

  app.all('*', (req, res) => {
    res.status(200).json([]);
  });

  return app.listen(port, () => {
    logger.info(`> Listening on port: ${port}`);
  });
};

start();
