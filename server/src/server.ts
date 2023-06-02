import fastify from 'fastify'
import { pokemonRoutes } from './routes/pokemon'

const app = fastify()

app.register(pokemonRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🌿🔥💧 HTTP Server running on http://localhost:3333')
  })
