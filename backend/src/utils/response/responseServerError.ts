import { Response } from 'express'
import ApiResponse from '@/models/ApiResponse'

function responseServerError(res: Response, message?: string) {
    message && console.error(message)
    return res.status(500).send({ message: 'Server error' } as ApiResponse)
}

export default responseServerError
