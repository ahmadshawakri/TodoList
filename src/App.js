import "./App.scss";
import Home from "./components/Todos/Home";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Home />
      </div>
    </TodoProvider>
  );
}

export default App;
