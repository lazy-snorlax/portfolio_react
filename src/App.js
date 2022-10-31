import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Routes>
            <Route path="/#skills" element={<Skills />} />
            <Route path="/#projects" element={<Projects />} />
          </Routes>

          <Navbar />

          <main className="pb-12">
            <div className="mb-10 pb-3">
              <div className="container mx-auto">
                <Skills />
              </div>
            </div>
            <div className="mb-10 pb-3">
              <div className="container mx-auto">
                <Projects />
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
