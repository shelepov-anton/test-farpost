import { useEffect } from 'react'

interface Props {
    title: string
}

function usePageMeta({ title }: Props) {
    useEffect(() => {
        document.title = title
    }, [])
}

export default usePageMeta
