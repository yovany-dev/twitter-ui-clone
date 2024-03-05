import { SVG } from "../SVG";

const Li = ({ svgs }) => {
  return (
    <>
      {svgs.map((item, index) => (
        <li key={index} className="500:h-[26.25px] 500:my-3">
          <SVG name={item} />
          <p className="font-bold hidden">{item}</p>
        </li>
      ))}
    </>
  )
}

export { Li };
