import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo'
import Goodbye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'

function App() {
  return (
    <div>
      <p>Hello, React!</p>
      < Greeting />
      < Goodbye name ={"Bob"}/>
      < Goodbye name={"John"}/>
      <AgeInfo age = {23} name={"Fred"}/>
      <AgeInfo age = {44} name={"Katja"}/>
      <p>Live</p>
      
    </div>
  )
}

export default App
// 