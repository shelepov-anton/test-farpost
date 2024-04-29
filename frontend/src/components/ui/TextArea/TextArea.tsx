import style from './TextArea.module.scss'
import { useState } from 'react'

interface Props {
    value: string
    onChange: (value: string) => void
}

function TextArea({ value, onChange }: Props) {
    return <textarea value={value} onChange={(e) => onChange(e.target.value)} className={style.textarea} />
}

export default TextArea
