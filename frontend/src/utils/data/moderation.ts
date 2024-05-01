import variables from '../../styles/variables.module.scss'
import { ModerationAction, ModerationDecision } from '../../types/Moderaion'

type ModerationButton = {
    [key in ModerationAction]: {
        title: string
        hotkey: string
        color?: string
    }
}

type ModerationDecisionMarker = {
    [key in ModerationDecision]: {
        title: string
        color?: string
    }
}

export const moderationButton: ModerationButton = {
    approve: {
        title: 'Одобрить',
        hotkey: 'Пробел',
        color: variables.decisionApprove,
    },
    decline: {
        title: 'Отклонить',
        hotkey: 'Del',
        color: variables.decisionDecline,
    },
    escalation: {
        title: 'Эскалация',
        hotkey: 'Shift+Enter',
        color: variables.decisionEscalation,
    },
    save: {
        title: 'Сохранить',
        hotkey: 'F7',
    },
}

export const moderationDecisionMarker: ModerationDecisionMarker = {
    approve: {
        title: 'Одобрено',
        color: variables.decisionApprove,
    },
    decline: {
        title: 'Отклонено',
        color: variables.decisionDecline,
    },
    escalation: {
        title: 'Эскалация',
        color: variables.decisionEscalation,
    },
}
