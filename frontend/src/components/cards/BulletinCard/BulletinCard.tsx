import Bulletin from '../../../types/models/Bulletin'
import style from './BulletinCard.module.scss'
import replaceWithBr from '../../../utils/scripts/replaceWithBr'
import { SvgSelector } from '../../ui/SvgSelector/SvgSelector'
import { IconName } from '../../ui/SvgSelector/IconName'
import { useEffect, useRef } from 'react'
import { DecisionStackItem } from '../../../hooks/useDecisionStack'
import CommentForm from '../../forms/CommentForm/CommentForm'
import Marker from '../../ui/Marker/Marker'
import { moderationDecisionMarker } from '../../../utils/data/moderation'

interface Props {
    bulletin: Bulletin
    isActive?: boolean
    decision?: DecisionStackItem
    onClick: () => void
    onCommentSubmit: (value: string, bulletinId: number) => void
}

function BulletinCard({ bulletin, isActive, decision, onClick, onCommentSubmit }: Props) {
    const submitComment = (value: string) => {
        onCommentSubmit(value, bulletin.id)
    }

    const displayCommentForm = decision && decision?.decision !== 'approve'
    const marker = decision ? moderationDecisionMarker[decision.decision] : null

    return (
        <article onClick={onClick} className={`${style.card} ${isActive && style.active}`}>
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
                        {displayCommentForm && (
                            <div className={style.comment}>
                                <CommentForm
                                    submit={submitComment}
                                    comment={decision.comment || ''}
                                    type={decision.decision}
                                />
                            </div>
                        )}
                    </div>
                    <div className={style.divide} />
                    <div className={style.contentRight}>
                        {bulletin.bulletinImages?.map((image) => (
                            <img src={image} alt="Объявление" className={style.image} />
                        ))}
                    </div>
                </div>
                <span className={style.marker}>{marker && <Marker label={marker.title} color={marker.color} />}</span>
            </div>
        </article>
    )
}

export default BulletinCard
