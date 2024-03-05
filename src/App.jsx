import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);

  let lastScroll = window.scrollY;
  window.onscroll = function (){
    let currentScroll = window.scrollY;
    if (currentScroll > lastScroll && window.screen.width < 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }

  return (
    <div className="content 500:flex">
      <Header scroll={scroll} />
      <Main />
    </div>
  );
}

export default App;
