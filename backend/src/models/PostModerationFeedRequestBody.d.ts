import Decision from '@/models/Decision'
import { Request } from 'express'

type PostModerationFeedRequest = Request<any, any, { decisions: Decision[] }>

export default PostModerationFeedRequest
