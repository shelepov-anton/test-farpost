import { Request, Response } from 'express'
import sql from '@/db/db.connection'
import Bulletin from '@/models/Bulletin'
import GetModerationFeedResponse from '@/models/GetModerationFeedResponse'
import formatDateString from '@/utils/date/formatDateString'

const getModerationFeed = async (_: Request, res: Response) => {
    sql.query('SELECT * FROM test_farpost.bulletin', (err, result: Bulletin[]) => {
        if (err) {
            return res.status(500).send({ message: err.message })
        }

        const response: GetModerationFeedResponse = {
            data: result.map((item) => ({ ...item, publishDateString: formatDateString(item.publishDate) })),
        }

        res.status(200).send(response)
    })
}

const method2 = (req: Request, res: Response) => {
    res.send('Hello, This was a post Request')
}

export default { getModerationFeed, method2 }
