import PageWrapper from './components/wrappers/PageWrapper/PageWrapper'
import BulletinCardList from './components/containers/BulletinCardList/BulletinCardList'
import ModerationButtonList from './components/containers/ModerationButtonList/ModerationButtonList'
import useModerationFeed from './hooks/useModerationFeed'
import useDecisionStack from './hooks/useDecisionStack'
import {useEffect} from "react";

function App() {
    const {bulletins, fetchBulletins, getStatus} = useModerationFeed()
    const {decisionStack, setDecisionComment, activeIndex, updateActiveIndex} = useDecisionStack({
        bulletins,
        fetchBulletins
    })

    const onBulletinCardClick = (bulletinIndex: number) => {
        updateActiveIndex(bulletinIndex)
    }

    const onCommentSubmit = (value: string, bulletinId: number) => {
        setDecisionComment(value, bulletinId)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [bulletins]);

    if (getStatus('idle') || !bulletins.length) {
        const message = getStatus('idle')
            ? 'Нажмите Enter, чтобы загрузить объявления'
            : 'Не найдено доступных объявлений'
        return (
            <PageWrapper>
                <span className="baseText">{message}</span>
            </PageWrapper>
        )
    }
    return (
        <PageWrapper>
            <BulletinCardList
                activeIndex={activeIndex}
                decisionStack={decisionStack}
                bulletinList={bulletins}
                onClick={onBulletinCardClick}
                onCommentSubmit={onCommentSubmit}
            />
            <ModerationButtonList/>
        </PageWrapper>
    )
}

export default App
