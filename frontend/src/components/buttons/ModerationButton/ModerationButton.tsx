interface Props {
    action: Action
}

type Action = 'approve' | 'decline' | 'escalation' | 'save'

function ModerationButton({ action }: Props) {
    const content: { [key: Action]: { title: string; hotkey: string } } = {}

    return (
        <div>
            <div></div>
        </div>
    )
}

export default ModerationButton
