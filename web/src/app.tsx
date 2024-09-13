import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summury } from './components/summary'
//import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      {/*<EmptyGoals />*/}

      <Summury />

      <CreateGoal />
    </Dialog>
  )
}
