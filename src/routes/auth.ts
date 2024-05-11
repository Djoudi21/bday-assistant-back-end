import { type FastifyInstance } from 'fastify'
import { AuthController } from '../controllers/authController'

const authController = new AuthController()

export async function authRouter (fastify: FastifyInstance): Promise<void> {
/*   fastify.route({
    method: 'POST',
    url: '/api/v1/login',
    handler: async (request, reply) => {
      await authController.login(request, reply)
    }
  }) */
  fastify.route({
    method: 'POST',
    url: '/api/v1/register',
    handler: async (request, reply) => {
      await authController.register(request, reply)
    }
  })
}
