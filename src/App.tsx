import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Card from "./pages/Card";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import About from "./pages/About";

function SiteLayout() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/card" element={<Card />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;