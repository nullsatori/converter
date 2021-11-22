import './styles.scss'
import UserInput from "./form/form";

function App() {
    return(
      <div className="App">
          <header className="AppHeader">
              <p>the simplest converter you ever seen</p>
          </header>
          <UserInput/>
      </div>
    );
}

export default App;
