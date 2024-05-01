import { Request, Response } from 'express'
import sql from '@/db/db.connection'
import Bulletin from '@/models/Bulletin'
import GetModerationFeedResponse from '@/models/GetModerationFeedResponse'
import formatDateString from '@/utils/date/formatDateString'
import PostModerationFeedRequest from '@/models/PostModerationFeedRequestBody'
import { insertDecisions, selectBulletinsWithoutDecisions } from '@/db/db.queries'
import responseInvalidPackageLength from '@/utils/response/responseInvalidPackageLength'
import responseServerError from '@/utils/response/responseServerError'
import ApiResponse from '@/models/ApiResponse'

const BULLETINS_PACKAGE_LENGTH = 10

const getModerationFeed = async (_: Request, res: Response) => {
    sql.query(
        selectBulletinsWithoutDecisions(BULLETINS_PACKAGE_LENGTH),
        (err, result: Bulletin[]) => {
            if (err) return responseServerError(res, err.message)

            const response: GetModerationFeedResponse = {
                message: 'Успешно',
                data: result.map((item) => ({
                    ...item,
                    publishDateString: formatDateString(item.publishDate),
                    bulletinImages: item.bulletinImages ? item.bulletinImages.split(', ') : [],
                })),
            }

            res.status(200).send(response)
        }
    )
}

const postModerationDecision = (req: PostModerationFeedRequest, res: Response) => {
    const body = req.body

    if (body.decisions?.length < BULLETINS_PACKAGE_LENGTH) {
        return responseInvalidPackageLength(res)
    }

    sql.query(insertDecisions(body.decisions), (err) => {
        if (err) return responseServerError(res, err.message)

        res.status(200).send({ message: 'Успешно' } as ApiResponse)
    })
}

export default { getModerationFeed, postModerationDecision }
