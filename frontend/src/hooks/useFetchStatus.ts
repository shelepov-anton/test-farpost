import { Dispatch, SetStateAction, useState } from 'react'

export type FetchStatus = 'idle' | 'pending' | 'success' | 'failure'

function useFetchStatus(): [
    (value: FetchStatus) => boolean,
    Dispatch<SetStateAction<FetchStatus>>,
    FetchStatus,
] {
    const [status, setStatus] = useState<FetchStatus>('idle')

    const getStatus = (value: FetchStatus): boolean => {
        return status === value
    }

    return [getStatus, setStatus, status]
}

export default useFetchStatus
