import api from '../index'
import { ModerationFeedResponse } from './moderationFeed.d'

export const getModerationFeed = async (): Promise<ModerationFeedResponse> => {
    const response = await api.get('moderation-feed')
    return response.data
}
