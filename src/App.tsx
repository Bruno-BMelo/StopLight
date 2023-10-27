import './App.css'
import { StopLight } from './StopLight'

function App() {
  
  return (
    <div className='page'>
     <StopLight/>
     <StopLight initialState="slow" />
     <StopLight/>
     <StopLight initialState="go" />
     <StopLight/>
     <StopLight/>
     <StopLight initialState='slow'/>
     <StopLight initialState='go' />
    </div>
  )
}

export default App
