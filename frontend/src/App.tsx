import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Index from "./components/Index";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Header />

      <div className="mx-auto">
        <Index />
        <Profile />
        <Skills />
        <Projects />
        <Career />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
