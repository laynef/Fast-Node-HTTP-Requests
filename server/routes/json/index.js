'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { message: 'Hello World', headers: request.headers }
  })
  fastify.post('/', async function (request, reply) {
    return { message: 'Hello World', headers: request.headers, body: request.body }
  })
  fastify.put('/', async function (request, reply) {
    return { message: 'Hello World', headers: request.headers, body: request.body }
  })
  fastify.patch('/', async function (request, reply) {
    return { message: 'Hello World', headers: request.headers, body: request.body }
  })
  fastify.delete('/', async function (request, reply) {
    return { message: 'Hello World', headers: request.headers }
  })
}
