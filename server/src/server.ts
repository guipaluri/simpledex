import fastify from 'fastify'
import cors from '@fastify/cors'
import { pokemonRoutes } from './routes/pokemon'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(pokemonRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🌿🔥💧 HTTP Server running on http://localhost:3333')
  })
