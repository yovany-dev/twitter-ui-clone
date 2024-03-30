import { SVG } from "../SVG";

const Profile = () => {
  return (
    <div className="1265:w-full 1265:flex items-center gap-3">
      <img className="w-10 h-10 t-rounded" src="https://pbs.twimg.com/profile_images/1736916533920604160/YuNnhwJ1_bigger.jpg" alt="Yovany Morales" />
      <section className="hidden 1265:grow 1265:flex items-center justify-between">
        <div>
          <h2 className="t-text-m font-bold leading-5">Yovany Morales</h2>
          <h3 className="t-text-m text-dark-gray leading-5">@yovany_dev</h3>
        </div>
        <div>
          <SVG name={'ThreePoints'} w="18.75px" h="18.75px" />
        </div>
      </section>
    </div>
  )
}

export { Profile };
