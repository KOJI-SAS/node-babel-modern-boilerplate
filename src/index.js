import './boostrap';

import config from 'config';

import logger from 'utils/logger';

/**
 * Startup function
 */
(async () => {
  logger.info('Server start');

  logger.info(config.get('test'));
})().catch(error => {
  logger.error(error);
});
