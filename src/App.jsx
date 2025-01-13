import "./App.css";

import { Navbar } from "./pages/home/navbar";

import { Footer } from "./pages";

// import { HomePage } from "./pages/home/home";

function App() {
  return (
    <main className="bg-[#00302E] w-full h-screen">
      {/* <HomePage /> */}
      <Navbar />
      {/* <Hero/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <Footer />
    </main>
  );
}

export default App;
