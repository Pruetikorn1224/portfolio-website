import { Suspense } from "react"

import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Thesis from "./components/Thesis"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Spinner from "./assets/ring-resize.svg"


function App() {

  return (
    <Suspense fallback={<Loading/>}>
      <div className="w-full max-sm:items-center max-sm:justify-center bg-gradient-to-b from-white to-gray-100">
        <Navbar />
        <About />
        <Thesis />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Suspense>
    
  )
}

function Loading() {
  return (
    <svg class="animate-spin h-10 w-10" viewBox="0 0 24 24"></svg>
  );
}

export default App
