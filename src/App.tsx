import "./App.css";
import AgeInfo from "./components/AgeInfo/AgeInfo";
import DogCard from "./components/DogCard/DogCard";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Counter from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  return (
    <div>
      <p className="appTitle">Hello, React!</p>
      <PersonalGreeting />

      {/*<Greeting />
      <Goodbye name={"John"} />

      <AgeInfo age={44} name={"Katja"} />
      
      */}
      <Counter />

      <DogCard />

      <ProfileCard
        name="Vite React"
        description="Vite ist ein modernes Build- und Frontend-Entwicklungswerkzeug, das ältere Lösungen wie Webpack ersetzt."
        avatar="https://tse1.mm.bing.net/th/id/OIP.vta7h9S8RGp3GCwjs4wcdwHaEK?pid=Api&P=0&h=180"
      />

      <SpaceMissionForm />
    </div>
  );
}

export default App;
//
