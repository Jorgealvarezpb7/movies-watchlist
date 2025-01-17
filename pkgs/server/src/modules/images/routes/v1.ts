import type { FastifyInstance, FastifyPluginCallback } from 'fastify';
import type { MimeType } from '../entity';

export const apiV1ImagesRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
  fastify.get('/:id', async (request, reply) => {
    const buffer = await file.toBuffer();
    const mimeType = file.mimetype as MimeType;
    const id = await fastify.domain.images.createImage(buffer, {
      mimeType,
    });

    return reply.status(201).send({
      id,
    });
  });

  fastify.post('/', async (request, reply) => {
    const file = await request.file();

    if (!file) {
      return reply.status(400).send({
        message: 'No file uploaded'
      });
    }

    const buffer = await file.toBuffer();
    const mimeType = file.mimetype as MimeType;
    const id = await fastify.domain.images.createImage(buffer, {
      mimeType,
    });

    return reply.status(201).send({
      id,
    });
  });

  done();
};
