import 'reflect-metadata';
import fp from 'fastify-plugin';
import { DataSource } from 'typeorm';

import { Title, TitleService } from '../../modules/title';
import { readConfig } from '../config';

export type DomainServices = {
  titles: TitleService;
};

export const DOMAIN_SERVICES_PLUGIN_NAME = 'domain';

export const domainServicesPlugin = fp(async (server) => {
  try {
    const config = readConfig();
    const appDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: config.postgresUser,
      password: config.postgresPassword,
      database: config.postgresDb,
      logging: true,
      synchronize: true,
      entities: [Title]
    });

    await appDataSource.connect();
    appDataSource.runMigrations();

    const titleRepository = appDataSource.getRepository(Title);
    const domainServices: DomainServices = {
      titles: new TitleService(titleRepository)
    };

    server.decorate(DOMAIN_SERVICES_PLUGIN_NAME, domainServices);
  } catch (error) {
    console.error(error);
  }
});
