function plural(source: string, number: number, clearNumber?: boolean): string {
    let type: number = 0
    if (!(number % 10 === 1 && number % 100 !== 11)) {
        if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
            type = 1
        } else {
            type = 2
        }
    }
    return source
        .replace(
            /\((([^|]*)\|([^|]*)\|([^|]*))\)/g,
            (substring, ...args: string[]): string => args[type + 1] ?? ''
        )
        .replace(/%d/g, `${clearNumber ? '' : number}`)
}

export default plural
