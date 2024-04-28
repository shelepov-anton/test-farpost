import Bulletin from '../../../types/models/Bulletin'
import BulletinCard from '../../cards/BulletinCard/BulletinCard'
import style from './BulletinCardList.module.scss'

interface Props {
    bulletinList: Bulletin[]
}

function BulletinCardList({ bulletinList }: Props) {
    console.log('bulletinList', bulletinList)
    return (
        <div className={style.container}>
            {bulletinList.map((item) => (
                <BulletinCard key={item.id} bulletin={item} />
            ))}
        </div>
    )
}

export default BulletinCardList
