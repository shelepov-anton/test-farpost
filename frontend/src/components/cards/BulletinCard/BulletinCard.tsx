import Bulletin from '../../../types/models/Bulletin'
import style from './BulletinCard.module.scss'
import replaceWithBr from '../../../utils/scripts/replaceWithBr'
import { SvgSelector } from '../../ui/SvgSelector/SvgSelector'
import { IconName } from '../../ui/SvgSelector/IconName'
import { useEffect, useRef } from 'react'
import { ModerationDecision } from '../../../types/Moderaion'
import { DecisionStackItem } from '../../../hooks/useDecisionStack'
import CommentForm from '../../forms/CommentForm/CommentForm'

interface Props {
    bulletin: Bulletin
    isActive?: boolean
    decision?: DecisionStackItem
    onClick: () => void
    onCommentSubmit: (value: string) => void
}

function BulletinCard({ bulletin, isActive, decision, onClick, onCommentSubmit }: Props) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        isActive && cardRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }, [isActive])

    const submitComment = (value: string) => {
        onCommentSubmit(value)
    }

    const borderClass = isActive ? style.active : decision && style[decision.decision]

    return (
        <article ref={cardRef} onClick={onClick} className={`${style.card} ${borderClass}`}>
            <div className={style.cardHeader}>
                <div className={style.headerLeft}>
                    <span className={style.id}>{bulletin.id}</span>
                    <span className={style.minus}>—</span>
                    <span>{bulletin.publishDateString}</span>
                </div>
                <div className={style.headerRight}>
                    <span className={style.user}>
                        <SvgSelector icon={IconName.USER} />
                        {bulletin.ownerLogin}
                    </span>
                </div>
            </div>
            <div className={style.cardBody}>
                <h2 className={style.title}>{bulletin.bulletinSubject}</h2>
                <div className={style.content}>
                    <div className={style.contentLeft}>
                        <div
                            className={style.text}
                            dangerouslySetInnerHTML={{
                                __html: replaceWithBr(bulletin.bulletinText),
                            }}
                        />
                    </div>
                    <div className={style.divide} />
                    <div className={style.contentRight}>
                        {bulletin.bulletinImages?.map((image) => (
                            <img src={image} alt="Объявление" className={style.image} />
                        ))}
                    </div>
                </div>
                {decision && decision?.decision !== 'approve' && (
                    <CommentForm submit={submitComment} comment={decision.comment || ''} type={decision.decision} />
                )}
            </div>
        </article>
    )
}

export default BulletinCard
