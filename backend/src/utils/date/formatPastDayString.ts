import plural from '@/utils/string/plural'

function formatPastDayString(diffInDays: number) {
    const days = ['сегодня', 'вчера', 'позавчера']
    return days[diffInDays] || `${plural('(день|дня|дней)', diffInDays)} назад`
}

export default formatPastDayString
