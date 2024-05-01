import { Router } from 'express'
import moderationFeedController from '@/controllers/moderationFeed.controller'

// Initialization
const router = Router()
const basePath = '/moderation-feed'

// Requests
router.get(basePath, moderationFeedController.getModerationFeed)

export default router
