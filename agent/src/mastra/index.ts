
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';

import { philosopherAgent } from './agents/philosopherAgent';
import {phenomenologistAgent} from "./agents/phenomenologistAgent"
import {analyticPhilosopherAgent} from "./agents/analyticPhilosopherAgent"

export const mastra = new Mastra({
  agents: { philosopherAgent ,phenomenologistAgent,analyticPhilosopherAgent},
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});




