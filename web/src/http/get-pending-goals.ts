export interface GetPendingGoalsResponse {
    pendignGoals: {
        id: string;
        title: string;
        desiredWeeklyFrequency: number;
        completionCount: number;
    }[]
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
    const response = await fetch('http://localhost:3333/pending-goals')
    const data = await response.json()
    return data.pendignGoals
}