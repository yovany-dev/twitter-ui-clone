import { SVG } from "../../SVG";

const Footer = () => {
  const links = ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility', 'Ads info'];
  const linksItems = links.map((item, index) => <a key={index} href={`#${item}`}>{item}</a>);

  return (
    <section>
      <nav className="px-4 flex flex-wrap text-[13px] gap-x-3 text-dark-gray">
        {linksItems}
        <div className="flex items-center">
          <p>More</p>
          <SVG name={'ThreePoints'} w="17px" h="13px" color="#71767b" />
        </div>
        <p>&copy; 2024 X Corp.</p>
      </nav>
    </section>
  )
}

export { Footer };
