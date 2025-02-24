import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen p-5">
      <ThemeToggle />
      <div className="max-w-3xl mx-auto p-5">
        <Profile />
        <Skills />
        <Projects />
        
        <Contact />
      </div>
    </div>
    
  );
};

export default App;
