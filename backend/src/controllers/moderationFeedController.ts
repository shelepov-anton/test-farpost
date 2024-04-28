import { Request, Response } from 'express'
import responseData from '@/mocks/responseData'

const getModerationFeed = (req: Request, res: Response) => {
    res.status(200).send({
        data: responseData,
    })
}

const method2 = (req: Request, res: Response) => {
    res.send('Hello, This was a post Request')
}

export default { getModerationFeed, method2 }
