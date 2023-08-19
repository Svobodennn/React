import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TodoProvider } from "./components/contexts/TodoContext";




function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />

    </TodoProvider>
  );
}

export default App;
