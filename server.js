/* import { createServer } from 'node:http'

const server = createServer((request, response) => {
  console.log('oiawdwd');

  return response.end();
});

server.listen(3333); */


import { fastify } from 'fastify'
import { DatabaseUsers } from './database.js'


const server = fastify();
const database = new DatabaseUsers;

// endpoints

server.post('/users', async (request, reply) => {
  const body = request.body;
  await database.createUser(body);

  return 201
})

server.get('/',  () => {
  return 'senai';
});


server.listen({
  port:3333,
})