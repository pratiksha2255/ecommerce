import "./App.css";
import NavbarHeader from "./components/Navbar";
import { RouterView } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <RouterView />
    </div>
  );
}

export default App;
