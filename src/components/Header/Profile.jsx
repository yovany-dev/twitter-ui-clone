import { SVG } from "../SVG";

const Profile = () => {
  return (
    <div>
      <img className="w-10 h-10 t-rounded" src="https://pbs.twimg.com/profile_images/1736916533920604160/YuNnhwJ1_bigger.jpg" alt="Yovany Morales" />
      <div className="hidden">
        <h2>Yovany Morales</h2>
        <h3>@yovany_dev</h3>
      </div>
      <div className="hidden">
        <SVG name={'Setting'} />
      </div>
    </div>
  )
}

export { Profile };
