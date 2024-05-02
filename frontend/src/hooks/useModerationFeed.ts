import {useEffect, useState} from 'react'
import {getModerationFeed} from '../api/moderationFeed/moderationFeed'
import Bulletin from '../types/models/Bulletin'
import useFetchStatus, {FetchStatus} from './useFetchStatus'

function useModerationFeed(): {
    bulletins: Bulletin[],
    getStatus: (value: FetchStatus) => boolean,
    fetchBulletins: () => void
} {
    const [bulletins, setBulletins] = useState<Bulletin[]>([])
    const [getStatus, setStatus, status] = useFetchStatus()

    const fetchBulletins = () => {
        setStatus('pending')
        getModerationFeed()
            .then(({data}) => {
                setBulletins(data)
                setStatus('success')
            })
            .catch(() => setStatus('failure'))
    }

    const onEnterPress = () => {
        if (getStatus('idle') || getStatus('failure')) {
            fetchBulletins()
        }
    }

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.code === 'Enter') {
            onEnterPress()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        return () => document.removeEventListener('keydown', handleKeydown)
    }, [status])

    return {bulletins, getStatus, fetchBulletins}
}

export default useModerationFeed
