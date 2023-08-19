import ChangeTheme from "./components/ChangeTheme";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="Light">
        <ChangeTheme/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
