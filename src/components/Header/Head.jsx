import { SVG } from "../SVG";
import { Photo } from "../Photo/Photo";

const Head = ({ scrollDown }) => {
  const translateY = scrollDown ? '-translate-y-[105px]' : '';

  return (
    <section className={'500:hidden w-full flex flex-col gap-5 fixed top-0 left-0 z-20 border-b border-very-dark-gray bg-black-alpha backdrop-blur-md transition-transform duration-500 ' + translateY}>
      <section className="pt-2 px-4 flex justify-between items-center">
        <Photo />
        <SVG name={'X'} />
        <SVG name={'Setting'} h="20px" color="#eff3f4" />
      </section>
      <section className="flex justify-around">
        <p className="font-semibold text-dark-gray t-text-m">For you</p>
        <div>
          <span className="block pb-4 font-semibold t-text-m">Following</span>
          <div className="w-full h-1 bg-twitter t-rounded"></div>
        </div>
      </section>
    </section>
  )
}

export { Head };
