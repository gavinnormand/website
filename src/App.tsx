import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Card from "./pages/Card";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="mx-auto max-w-3xl px-8 py-16 md:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
