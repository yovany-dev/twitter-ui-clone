import { SVG } from "../../SVG";

const Footer = () => {
  return (
    <section>
      <nav className="px-4 flex flex-wrap text-[13px] gap-x-3 text-dark-gray">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Accessibility</a>
        <a href="#">Ads info</a>
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
