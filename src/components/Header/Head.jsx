import { SVG } from "../SVG";

const Head = () => {
  return (
    <section className="flex flex-col gap-5 border-b border-very-dark-gray">
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
