import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Bulletin from '../types/models/Bulletin'
import { ModerationDecision } from '../types/Moderaion'

export interface DecisionStackItem {
    bulletinId: number
    decision: ModerationDecision
    comment?: string
}

interface Props {
    bulletins: Bulletin[]
}

function useDecisionStack({ bulletins }: Props): [DecisionStackItem[], number, Dispatch<SetStateAction<number>>] {
    const [decisionStack, setDecisionStack] = useState<DecisionStackItem[]>([])
    const [activeIndex, setActiveIndex] = useState(0)

    const updateDecisionStack = (decision: ModerationDecision) => {
        if (!bulletins.length && activeIndex > bulletins.length) return
        const updatedStack = [...decisionStack]
        updatedStack.splice(activeIndex, 1, { bulletinId: bulletins[activeIndex].id, decision })
        setDecisionStack(updatedStack)
        setActiveIndex(activeIndex + 1)
    }

    const handleKeydown = (e: KeyboardEvent) => {
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
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        return () => document.removeEventListener('keydown', handleKeydown)
    }, [bulletins, activeIndex])

    return [decisionStack, activeIndex, setActiveIndex]
}

export default useDecisionStack
