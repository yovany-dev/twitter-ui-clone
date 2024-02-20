import { SVG } from "../SVG";

const svg = ['Home', 'Explore', 'Notifications', 'Messages'];
const Li = () => {
  return (
    <>
      {svg.map((item, index) => (
        <li key={index}>
          <SVG name={item} />
          <p className="font-bold hidden">{item}</p>
        </li>
      ))}
    </>
  )
}

export { Li };
