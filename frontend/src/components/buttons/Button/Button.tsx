import style from './Button.module.scss'

interface Props {
    text: string
    onClick: () => void
    type: 'primary' | 'secondary'
}

function Button({ onClick, text, type }: Props) {
    const btnStyle = type === 'primary' ? 'buttonPrimary' : 'buttonSecondary'
    return (
        <button className={`${style.button} ${style[btnStyle]}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
