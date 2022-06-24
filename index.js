const http = require('http');
const dotenv = require('dotenv');
const debug = require('debug')('app:server');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = require('./app');

const port = process.env.PORT ?? 3000;

const server = http.createServer(app);

server.listen(port, () => {
  debug(`Server listening on port ${port}`);
});
