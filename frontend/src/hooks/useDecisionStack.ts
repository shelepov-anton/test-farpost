import { useEffect, useState } from 'react'
import Bulletin from '../types/models/Bulletin'
import { ModerationDecision } from '../types/Moderaion'
import { postModerationDecisions } from '../api/moderationFeed/moderationFeed'

export interface DecisionStackItem {
    bulletinId: number
    decision: ModerationDecision
    comment?: string
}

interface Props {
    bulletins: Bulletin[]
}

interface Result {
    decisionStack: DecisionStackItem[]
    setDecisionComment: (value: string, index: number) => void
    activeIndex: number
    updateActiveIndex: (index: number) => void
}

function useDecisionStack({ bulletins }: Props): Result {
    const [decisionStack, setDecisionStack] = useState<DecisionStackItem[]>([])
    const [activeIndex, setActiveIndex] = useState(0)

    let isWaitForComment = false

    const updateActiveIndex = (index: number): void => {
        if (!isWaitForComment) {
            setActiveIndex(index)
        }
    }

    const updateDecisionStack = (decision: ModerationDecision): void => {
        if (!bulletins.length && activeIndex > bulletins.length) return

        const updatedStack = [...decisionStack]
        updatedStack.splice(activeIndex, 1, { bulletinId: bulletins[activeIndex].id, decision })

        setDecisionStack(updatedStack)

        if (decision !== 'approve') {
            isWaitForComment = true
        } else {
            updateActiveIndex(activeIndex + 1)
        }
    }

    const setDecisionComment = (comment: string, bulletinId: number): void => {
        const index = decisionStack.findIndex((item) => item.bulletinId === bulletinId)
        const updatedStack = [...decisionStack]
        updatedStack.splice(index, 1, { ...decisionStack[index], comment })
        setDecisionStack(updatedStack)
        isWaitForComment = false
        updateActiveIndex(activeIndex + 1)
    }

    const sendDecisions = async () => {
        try {
            await postModerationDecisions(decisionStack)
        } catch (e: any) {
            console.error(e.message)
        }
    }

    const handleKeydown = async (e: KeyboardEvent): Promise<void> => {
        if (isWaitForComment) return

        if (e.code === 'Space') {
            e.preventDefault()
            updateDecisionStack('approve')
        }
        if (e.code === 'Delete') {
            updateDecisionStack('decline')
        }
        if (e.code === 'Enter' && e.shiftKey) {
            updateDecisionStack('escalation')
        }
        if (e.code === 'F7') {
            e.preventDefault()
            await sendDecisions()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        return () => document.removeEventListener('keydown', handleKeydown)
    }, [bulletins, activeIndex, isWaitForComment])

    return {
        decisionStack,
        setDecisionComment,
        activeIndex,
        updateActiveIndex,
    }
}

export default useDecisionStack
