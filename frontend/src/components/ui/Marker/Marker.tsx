import style from './Marker.module.scss'

interface Props {
    color?: string
    label: string
}

function DecisionMarker({ color, label }: Props) {
    return (
        <span className={style.marker}>
            {color && <span style={{ backgroundColor: color }} className={style.dot} />}
            <span>{label}</span>
        </span>
    )
}

export default DecisionMarker
