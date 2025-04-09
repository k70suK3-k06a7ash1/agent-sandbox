
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';

import { philosopherAgent } from './agents';

export const mastra = new Mastra({
  agents: { philosopherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
