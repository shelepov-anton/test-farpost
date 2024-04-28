export default interface Bulletin {
    id: number
    publishDate: number
    publishDateString: string
    ownerId: number
    ownerLogin: string
    bulletinSubject: string
    bulletinText: string
    bulletinImages: string[]
}
