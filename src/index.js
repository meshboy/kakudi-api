/**
 *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
 * */
import http from 'http';
import { createServer } from 'http';

import app from './server';

const server = http.createServer(app);
let currentApp = app;

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
