# Movies Watchlist

## Development

### Requirements

- [Bun.sh](https://bun.sh)
- [Docker](https://www.docker.com/)

### Setup

1. Open your Terminal and clone this repository:

```bash
git clone https://github.com/Jorgealvarezpb7/movies-watchlist.git
```

2. Change directory to the project folder:

```bash
cd ./movies-watchlist
```

3. Install dependencies using Bun:

```bash
bun i
```

4. Start Docker Compose in Docker for Database and other services:

```bash
make services
```

5. Run the project:

There is 2 main components on this project, the backend and the frontend.

You should run both of them at the same time, to achieve this you will need
2 terminal windows, run the following commands in each one:

**Server**

```bash
make server
```

**Client**

Once running the client will be available by openning your browser and
going to http://localhost:5173/.

```bash
make client
```
