import ApiResponse from '@/models/ApiResponse'
import { Response } from 'express'

function responseInvalidPackageLength(res: Response) {
    return res.status(400).send({
        message: 'Необходимо сформировать решение по всем объявлениям',
    } as ApiResponse)
}

export default responseInvalidPackageLength
