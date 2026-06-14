import { app } from './app/app';
import { logger } from './config/logger';
import { env } from './config/env';

app.listen(env.PORT, () => {
  logger.info(`Server running on port ${env.PORT}`);
});
