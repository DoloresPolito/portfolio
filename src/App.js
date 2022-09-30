import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />

      <Footer />
    </div>
  );
}

export default App;
