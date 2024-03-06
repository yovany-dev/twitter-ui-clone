import { SVG } from "../SVG";

const Head = () => {
  return (
    <section className="hidden w-full max-w-[600px] pr-2 500:flex items-center justify-between sticky -top-[0.5px] z-20 border-l border-b border-r border-very-dark-gray bg-black-alpha backdrop-blur-md">
      <div className="grow flex justify-around pt-3">
        <p className="font-semibold text-dark-gray t-text-m">For you</p>
        <div>
          <span className="block pb-3 font-semibold t-text-m">Following</span>
          <div className="w-full h-1 bg-twitter t-rounded"></div>
        </div>
      </div>
      <div>
        <SVG name={'Setting'} w="30px" h="20px" color="#eff3f4" />
      </div>
    </section>
  )
}

export { Head };
