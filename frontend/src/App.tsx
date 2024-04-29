import PageWrapper from './components/wrappers/PageWrapper/PageWrapper'
import BulletinCardList from './components/containers/BulletinCardList/BulletinCardList'
import ModerationButtonList from './components/containers/ModerationButtonList/ModerationButtonList'
import useModerationFeed from './hooks/useModerationFeed'
import usePageMeta from './hooks/usePageMeta'
import useDecisionStack from './hooks/useDecisionStack'

function App() {
    const [bulletins, getStatus] = useModerationFeed()
    const [decisionStack, activeIndex, setActiveIndex] = useDecisionStack({ bulletins })

    usePageMeta({
        title: 'Лента модерации',
    })

    const onBulletinCardClick = (bulletinIndex: number) => {
        setActiveIndex(bulletinIndex)
    }

    const onCommentSubmit = (value: string) => {}

    if (getStatus('idle')) {
        return (
            <PageWrapper>
                <span>Нажмите Enter, чтобы загрузить объявления</span>
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
            <ModerationButtonList />
        </PageWrapper>
    )
}

export default App
