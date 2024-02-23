import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);

  window.onscroll = function (){
    // document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  return (
    <div className="content">
      <Header opacity={scroll} />
      <Main />
    </div>
  );
}

export default App;
