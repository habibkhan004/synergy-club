import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function App() {
  const [tab, setTab] = useState("home");
  let onTabChange = (tabChange) => {
    let newTab = tabChange;
    setTab(newTab);
  };

  return (
    <>
      <Header tab={tab} onTabChange={onTabChange}></Header>
      {tab === "home" && <Home></Home>}
      {tab === "gallery" && <Gallery />}
      {tab === "about" && <About />}
      {tab === "contact" && <Contact />}
      <Footer onTabChange={onTabChange}></Footer>
    </>
  );
}

export default App;
