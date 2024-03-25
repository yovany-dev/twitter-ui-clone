import { SVG } from "../../SVG";

const Header = () => {
  return (
    <section className="w-[290px] h-[51.3px] flex items-center justify-center fixed top-0 bg-black">
      <div className="grow flex items-center t-rounded bg-aside-head">
        <label className="ml-3" htmlFor="search">
          <SVG name={'Search'} w="44px" h="18.75px" color="#71767b" />
        </label>
        <input className="grow p-[10px] pl-1 t-text-m text-dark-gray bg-transparent focus:outline-none placeholder:text-dark-gray placeholder:font-semibold" type="text" id="search" placeholder="Search" />
      </div>
    </section>
  )
}

export { Header };
