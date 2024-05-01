type GetModerationFeedResponse = ApiResponse<
    {
        id: number
        publishDate: number
        publishDateString: string
        ownerId: number
        ownerLogin: string
        bulletinSubject: string
        bulletinText: string
        bulletinImages: string[]
    }[]
>

export default GetModerationFeedResponse
