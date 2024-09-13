
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/empty-goals'
import { CreateGoal } from './components/create-goal'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
// import { CreateGoal } from './components/create-goal'
// import { EmptyGoals } from './components/empty-goals'



export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 seconds 
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
