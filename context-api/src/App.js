import Container from "./Container";
// import ChangeLang from "./components/ChangeLang";
// import ChangeTheme from "./components/ChangeTheme";
// import Footer from "./components/Footer";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import './styles.css';

const App = () => (
  <LangContextProvider>
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
  </LangContextProvider>
);


export default App;
