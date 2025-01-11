import fp from 'fastify-plugin';

import { apiV1TitlesRouter } from '../../modules/title/routes/v1';

import type { FastifyInstance } from 'fastify';

export const apiV1RouterPlugin = fp(
  (fastify: FastifyInstance, _, done) => {
    fastify.register(apiV1TitlesRouter, {
      prefix: '/api/v1/titles'
    });

    done();
  },
  {
    name: 'router'
  }
);
