import Decision from '@/models/Decision'

export function insertDecisions(decisions: Decision[]) {
    const queryValues = decisions
        .map(
            ({ bulletinId, decision, comment }) =>
                `(${bulletinId}, '${decision}', '${comment || ''}')`
        )
        .join(', ')
    return `INSERT INTO test_farpost.bulletin_decision ( bulletin_id, decision, comment ) VALUES ${queryValues}`
}

export function selectBulletinsWithoutDecisions(limit: number) {
    return `SELECT *
            FROM test_farpost.bulletin 
            WHERE id NOT IN 
                (SELECT bulletin_id 
                FROM test_farpost.bulletin_decision) LIMIT ${limit}`
}
