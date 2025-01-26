import type { FastifyInstance, FastifyPluginCallback } from 'fastify';

export const apiV1NameProfessionsRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
  fastify.get('/', async (_, reply) => {
    const result = await fastify.domain.nameProfessions.getNameProfessions();
    return reply.status(200).send(result);
  });

  fastify.get('/:id', async (request, reply) => {
    const id = request?.params.id as string;

    if (!id) {
      return reply.status(400).send({ message: 'Id is required' });
    }

    const maybeNameProfession = await fastify.domain.nameProfessions.getNameProfessionById(id);

    if (!maybeNameProfession) {
      return reply.status(400).send({ message: 'Name Profession not found' });
    }

    return reply.status(200).send(maybeNameProfession);
  });

  done();
};
