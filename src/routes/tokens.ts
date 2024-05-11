import type { FastifyInstance } from 'fastify'
import { TokensController } from '../controllers/tokensController'

const tokensController = new TokensController()

export async function tokensRouter (fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: 'POST',
    url: '/api/v1/register-push-token',
    handler: async (request, reply) => {
      await tokensController.registerPushToken(request, reply)
    }
  })
}
