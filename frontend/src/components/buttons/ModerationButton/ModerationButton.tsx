import style from './ModerationButton.module.scss'
import { ModerationAction } from '../../../types/Moderaion'

interface Props {
    disabled?: boolean
    action: ModerationAction
}

type ActionButton = {
    [key in ModerationAction]: {
        title: string
        hotkey: string
        color?: string
    }
}

const button: ActionButton = {
    approve: {
        title: 'Одобрить',
        hotkey: 'Пробел',
        color: '#88BD35',
    },
    decline: {
        title: 'Отклонить',
        hotkey: 'Del',
        color: '#F7882E',
    },
    escalation: {
        title: 'Эскалация',
        hotkey: 'Shift+Enter',
        color: '#1764CC',
    },
    save: {
        title: 'Сохранить',
        hotkey: 'F7',
    },
}

function ModerationButton({ action }: Props) {
    return (
        <>
            <button className={style.button}>{button[action].title}</button>
            <span className={style.hotkey}>
                {button[action].color && (
                    <span style={{ backgroundColor: button[action].color }} className={style.dot} />
                )}
                <span>{button[action].hotkey}</span>
            </span>
        </>
    )
}

export default ModerationButton
