import Bulletin from '../../../types/models/Bulletin'
import style from './BulletinCard.module.scss'
import replaceWithBr from '../../../utils/replaceWithBr'
import { SvgSelector } from '../../ui/SvgSelector/SvgSelector'
import { IconName } from '../../ui/SvgSelector/IconName'

interface Props {
    bulletin: Bulletin
}

function BulletinCard({ bulletin }: Props) {
    return (
        <article className={style.card}>
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
                            <img
                                src={image}
                                alt="Объявление"
                                className={style.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default BulletinCard
