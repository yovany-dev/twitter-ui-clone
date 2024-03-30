import { Header } from "./Header";
import { Subscribe } from "./Subscribe";
import { Trends } from "./Trends";
import { Follow } from "./Follow";
import { Footer } from "./Footer";
import { useState, useEffect, useRef } from "react";
import { useScroll } from "../../../hooks/useScroll/useScroll";

const Aside = () => {
  const aside = useRef(null);
  const scroll = useScroll();
  const [position, setPosition] = useState('static');
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    if (aside.current) {
      const rect = aside.current.getBoundingClientRect();
      const top = rect.top;

      if (scroll.scrollUP) {
        // scroll up
        if (top >= 0) {
          setPosition('fixed top-0');
          setMarginTop(scroll.scrollY);
          return;
        }
      } else {
        // scroll down
        if (top <= -650) {
          setPosition('fixed -top-[650px]');
          setMarginTop(scroll.scrollY - 650);
          return;
        }
      }
      setPosition('static');
    }
  }, [scroll.scrollY]);

  return (
    <aside className='hidden 988:block 988:w-[290px] 1078:w-[350px] 988:mr-[10px] 1500:mr-[70px]'>
      <div style={{marginTop: marginTop}}></div>
      <div ref={aside} className={'988:w-[290px] 1078:w-[350px] flex flex-col gap-4 ' + position}>
        <div className="mt-[51px]"></div>
        <Header />
        <Subscribe />
        <Trends />
        <Follow />
        <Footer />
      </div>
    </aside>
  )
}

export { Aside };
