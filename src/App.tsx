import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Card from "./pages/Card";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
