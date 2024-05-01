import api from '../index'
import { ModerationFeedResponse } from './moderationFeed.d'
import { DecisionStackItem } from '../../hooks/useDecisionStack'

export const getModerationFeed = async (): Promise<ModerationFeedResponse> => {
    const response = await api.get('moderation-feed')
    return response.data
}

export const postModerationDecisions = async (decisions: DecisionStackItem[]): Promise<void> => {
    const response = await api.post('moderation-feed', { decisions })
    return response.data
}
