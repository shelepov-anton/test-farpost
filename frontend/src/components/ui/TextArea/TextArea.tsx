import style from './TextArea.module.scss'
import { useEffect, useRef } from 'react'

interface Props {
    value: string
    onChange: (value: string) => void
    focusOnMount?: boolean
}

function TextArea({ value, onChange, focusOnMount }: Props) {
    const ref = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (focusOnMount && ref.current) {
            setTimeout(() => {
                ref.current?.focus()
            }, 100)
        }
    }, [])

    return <textarea ref={ref} value={value} onChange={(e) => onChange(e.target.value)} className={style.textarea} />
}

export default TextArea
