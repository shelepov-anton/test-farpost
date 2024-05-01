import Button from '../../buttons/Button/Button'
import TextArea from '../../ui/TextArea/TextArea'
import style from './CommentForm.module.scss'
import { useState } from 'react'
import { ModerationDecision } from '../../../types/Moderaion'

interface Props {
    type: ModerationDecision
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

    const title = type === 'decline' ? 'Причина отклонения *' : 'Примечание для модератора'

    return (
        <form className={style.container}>
            <h2 className={style.title}>{title}</h2>
            <TextArea value={value} onChange={onChange} focusOnMount />
            {!isSubmitted && (
                <div className={style.buttons}>
                    <Button text="Отмена" type="secondary" onClick={onSubmit} />
                    <Button text="Подтвердить" type="primary" onClick={onSubmit} />
                </div>
            )}
        </form>
    )
}

export default CommentForm
