import formatPastDayString from '@/utils/date/formatPastDayString'

function formatDateString(timestamp: number): string {
    const timestampDate = new Date(timestamp)
    const currentDate = new Date()

    const diffInDays = Math.round(
        (currentDate.getTime() - timestampDate.getTime()) / (1000 * 3600 * 24)
    )

    const time = timestampDate.toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit',
    })

    return `${time}, ${formatPastDayString(diffInDays)}`
}

export default formatDateString
