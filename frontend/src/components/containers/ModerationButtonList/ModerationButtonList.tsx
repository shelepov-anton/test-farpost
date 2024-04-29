import ModerationButton from '../../buttons/ModerationButton/ModerationButton'
import style from './ModerationButtonList.module.scss'
import { ModerationAction } from '../../../types/Moderaion'

function ModerationButtonList() {
    const actions: ModerationAction[] = ['approve', 'decline', 'escalation', 'save']

    return (
        <div className={style.container}>
            {actions.map((item) => (
                <ModerationButton key={item} action={item} />
            ))}
        </div>
    )
}

export default ModerationButtonList
