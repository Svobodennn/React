import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <LangContextProvider>
        <ThemeContextProvider>
          <ChangeTheme />
          <ChangeLang/>
          <Footer />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
