import './App.css'
//import AgeInfo from './components/AgeInfo/AgeInfo'
import DogCard from './components/DogCard/DogCard'
//import Goodbye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'
import ProfileCard from './components/ProfileCard/ProfileCard'

function App() {
  return (
    <div>
      <p>Hello, React!</p>
      < Greeting/>
      < DogCard />
      {/*< Goodbye name ={"Bob"}/>
      < Goodbye name={"John"}/>
      <AgeInfo age = {23} name={"Fred"}/>
      <AgeInfo age = {44} name={"Katja"}/>
      <p>Live</p>*/}
      
      <ProfileCard
      avatar="/src/assets/images/my-image.png"
        name="Vite React"
        description="Vite ist ein modernes Build- und Frontend-Entwicklungswerkzeug, das ältere Lösungen wie Webpack ersetzt."
        />
      
    </div>
  )
}

export default App
// 