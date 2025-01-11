import 'reflect-metadata';
import { configDotenv } from 'dotenv';

import { makeServer } from './server';

async function main(): Promise<void> {
  try {
    configDotenv();

    const server = await makeServer();

    await server.listen({
      port: 3000,
      listenTextResolver: (addr) => {
        return `"Movies Watchlist Server" Listening at ${addr}`;
      }
    });
  } catch (err) {
    console.error('Failed to initialize  "Movies Watchlist Server"', err);
    process.exit(1);
  }
}

main();