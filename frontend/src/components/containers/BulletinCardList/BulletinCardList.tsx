import Bulletin from '../../../types/models/Bulletin'
import BulletinCard from '../../cards/BulletinCard/BulletinCard'
import style from './BulletinCardList.module.scss'
import { useEffect } from 'react'
import { DecisionStackItem } from '../../../hooks/useDecisionStack'

interface Props {
    bulletinList: Bulletin[]
    activeIndex: number
    decisionStack: DecisionStackItem[]
    onClick: (bulletinIndex: number) => void
    onCommentSubmit: (value: string) => void
}

function BulletinCardList({ bulletinList, activeIndex, decisionStack, onClick, onCommentSubmit }: Props) {
    const getBulletinDecisionById = (id: number) => {
        return decisionStack.find((item) => item.bulletinId === id)
    }

    const submitComment = (value: string) => {
        onCommentSubmit(value)
    }

    return (
        <div className={style.container}>
            {bulletinList.map((item, index) => (
                <BulletinCard
                    key={item.id}
                    bulletin={item}
                    isActive={activeIndex === index}
                    decision={getBulletinDecisionById(item.id)}
                    onClick={() => onClick(index)}
                    onCommentSubmit={submitComment}
                />
            ))}
        </div>
    )
}

export default BulletinCardList
