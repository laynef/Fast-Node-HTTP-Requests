'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return '<div>GET: Hello World</div>'
  })
  fastify.post('/', async function (request, reply) {
    return '<div>POST: Hello World</div>'
  })
  fastify.patch('/', async function (request, reply) {
    return '<div>PATCH: Hello World</div>'
  })
  fastify.put('/', async function (request, reply) {
    return '<div>PUT: Hello World</div>'
  })
  fastify.delete('/', async function (request, reply) {
    return '<div>DELETE: Hello World</div>'
  })
}
