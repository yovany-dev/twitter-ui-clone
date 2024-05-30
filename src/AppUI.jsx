import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Loading } from "./components/Loading/Loading";
import { useState, useEffect } from "react";

const UI = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

const AppUI = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (loading ? <Loading /> : <UI />)
}

export { AppUI };
