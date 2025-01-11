import type { FastifyInstance, FastifyPluginCallback } from 'fastify';
import type { CreateTitleDto } from '../service';

export const apiV1TitlesRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
  fastify.get('/', async (_, reply) => {
    const result = await fastify.domain.titles.getTitles();
    return reply.status(200).send(result);
  });

  fastify.post('/', async (request, reply) => {
    const reqBody = JSON.parse(request.body as string) as CreateTitleDto;
    const result = await fastify.domain.titles.createTitle({
      title: reqBody.title,
      releaseDate: reqBody.releaseDate,
      starRating: reqBody.starRating,
      audienceRating: reqBody.audienceRating
    });

    return reply.status(200).send(result);
  });

  fastify.delete('/:id', async (request, reply) => {
    const id = (request?.params as unknown as { id?: string })?.id as string;

    if (!id) {
      return reply.status(400).send({ message: 'Id is required' });
    }

    await fastify.domain.titles.deleteTitle(id);

    return reply.status(200).send({ message: 'Title deleted' });
  });

  done();
};
