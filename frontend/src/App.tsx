import PageWrapper from './components/wrappers/PageWrapper/PageWrapper'
import BulletinCardList from './components/containers/BulletinCardList/BulletinCardList'
import { Suspense, useEffect, useState } from 'react'
import Bulletin from './types/models/Bulletin'
import { getModerationFeed } from './api/moderationFeed/moderationFeed'

function App() {
    const [bulletins, setBulletins] = useState<Bulletin[]>([])

    useEffect(() => {
        getModerationFeed().then(({ data }) => {
            setBulletins(data)
        })
    }, [])

    return (
        <PageWrapper>
            <Suspense>
                <BulletinCardList bulletinList={bulletins} />
            </Suspense>
        </PageWrapper>
    )
}

export default App
