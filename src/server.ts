import express from 'express'
import mustacheExpress from 'mustache-express'
import dotenv from 'dotenv'
import path from 'path'
import mainRoutes from './routes/index'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');

server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustacheExpress());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.listen(process.env.PORT);
