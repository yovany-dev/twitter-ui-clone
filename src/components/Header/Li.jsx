import { SVG } from "../SVG";

const Li = ({ svgs }) => {
  const listItems = svgs.map((item, index) => {
    let fontWeight = 'font-normal';
    if (item === 'Home') {
      fontWeight = 'font-bold';
    }
    return (
      <li key={index} className="500:h-[26.25px] 500:my-3 1265:flex 1265:items-center 1265:gap-5 cursor-pointer">
        <SVG name={item} />
        <p className={'hidden 1265:inline 1265:text-xl ' + fontWeight}>{item}</p>
      </li>
    );
  });
  return (listItems);
}

export { Li };
