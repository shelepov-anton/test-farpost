interface Props {
    text: string
    onClick: () => void
}

function Button({ onClick, text }: Props) {
    return <button onClick={onClick}>{text}</button>
}

export default Button
