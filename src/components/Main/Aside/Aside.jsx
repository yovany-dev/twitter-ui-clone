import { Header } from "./Header";
import { Subscribe } from "./Subscribe";
import { Trends } from "./Trends";
import { Follow } from "./Follow";
import { Footer } from "./Footer";
import { useState, useEffect, useRef } from "react";

const Aside = () => {
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState('static');
  const [marginTop, setMarginTop] = useState(0);
  const scrollUP = useRef(false);
  const aside = useRef(null);

  useEffect(() => {
    if (aside.current) {
      const rect = aside.current.getBoundingClientRect();
      const top = rect.top;

      if (top >= 0 && scrollUP.current) {
        setPosition('fixed top-0');
      }
    }
  }, [scrollY]);

  let lastScroll = window.scrollY;
  window.onscroll = function (){
    let currentScroll = window.scrollY;
    setScrollY(currentScroll);

    if (currentScroll < lastScroll) {
      scrollUP.current = true;
      if (currentScroll > 0 && position !== 'fixed top-0') {
        setPosition('static');
      }
      if (position === 'fixed top-0') {
        setMarginTop(currentScroll);
      }
    } else {
      if (currentScroll >= 800) {
        setPosition('fixed -top-[800px]')
        setMarginTop(currentScroll - 800);
      }
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }

  return (
    <aside className='hidden 988:block 988:w-[290px] 988:mr-[10px]'>
      <div style={{marginTop: marginTop}}></div>
      <div ref={aside} className={'988:w-[290px] flex flex-col gap-4 ' + position}>
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
