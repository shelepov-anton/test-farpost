import Button from '../../buttons/Button/Button'
import TextArea from '../../ui/TextArea/TextArea'
import style from './CommentForm.module.scss'
import { useState } from 'react'

interface Props {
    type: 'decline' | 'escalation'
    comment: string
    submit: (value: string) => void
}

function CommentForm({ comment, type, submit }: Props) {
    const [value, setValue] = useState(comment)
    const [isSubmitted, setIsSubmitted] = useState(true)

    const onChange = (value: string) => {
        setValue(value)
        if (value !== comment) {
            setIsSubmitted(false)
        }
    }

    const onSubmit = () => {
        submit(value)
        setIsSubmitted(true)
    }

    return (
        <form className={style.container}>
            <h2>{type === 'decline' ? 'Причина отклонения:' : 'Примечание:'}</h2>
            <TextArea value={comment} onChange={onChange} />
            {!isSubmitted && (
                <div>
                    <Button text="Отмена" onClick={onSubmit} />
                    <Button text="Подтвердить" onClick={onSubmit} />
                </div>
            )}
        </form>
    )
}

export default CommentForm
