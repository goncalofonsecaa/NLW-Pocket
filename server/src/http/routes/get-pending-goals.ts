import {z} from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../functions/create-goal'
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
    app.get('/pending-goals', async () => {
        const { pendignGoals } = await getWeekPendingGoals()
      
        return {
          pendignGoals,
        }
      })
}