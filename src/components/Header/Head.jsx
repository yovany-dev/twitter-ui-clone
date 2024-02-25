import { SVG } from "../SVG";

const Head = ({ scroll }) => {
  let className = 'w-full flex flex-col gap-5 fixed top-0 left-0 z-20 border-b border-very-dark-gray bg-black-alpha backdrop-blur-md transition-transform duration-500';
  if (scroll) {
    className += ' -translate-y-[105px]';
  }

  return (
    <section className={className}>
      <section className="pt-2 px-4 flex justify-between items-center">
        <img className="w-8 t-rounded" src="https://pbs.twimg.com/profile_images/1736916533920604160/YuNnhwJ1_bigger.jpg" alt="avatar user" />
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
