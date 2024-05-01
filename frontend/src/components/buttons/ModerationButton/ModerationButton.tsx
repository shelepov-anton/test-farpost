import style from './ModerationButton.module.scss'
import { ModerationAction } from '../../../types/Moderaion'
import Marker from '../../ui/Marker/Marker'
import { moderationButton } from '../../../utils/data/moderation'

interface Props {
    disabled?: boolean
    action: ModerationAction
}

function ModerationButton({ action }: Props) {
    return (
        <>
            <button className={style.button}>{moderationButton[action].title}</button>
            <Marker label={moderationButton[action].hotkey} color={moderationButton[action].color} />
        </>
    )
}

export default ModerationButton
