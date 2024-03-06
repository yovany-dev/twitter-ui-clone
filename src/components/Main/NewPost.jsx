import { SVG } from "../SVG";
import { useResize } from "../../hooks/useResize/useResize";

const NewPost = () => {
  const resize = useResize(688);

  let svgs = ['Media', 'Gif', 'Emoji', 'Location'];
  if (resize) {
    svgs = ['Media', 'Gif', 'Poll', 'Emoji', 'Schedule', 'Location'];
  }

  return (
    <section className="hidden p-4 500:flex gap-2 border-l border-b border-r border-very-dark-gray">
      <img className="w-10 h-10 t-rounded" src="https://pbs.twimg.com/profile_images/1736916533920604160/YuNnhwJ1_bigger.jpg" alt="Yovany Morales" />
      <div className="grow pt-1 flex items-end justify-between">
        <div className="flex flex-col gap-7">
          <p className="text-xl text-dark-gray">What is happening?!</p>
          <div className="mb-2 flex gap-5">
            {
              svgs.map((svg, i) => (
                <SVG key={i} name={svg} w="20px" h="20px" color="#1d9bf0" />
              ))
            }
          </div>
        </div>
        <button className="h-9 px-4 font-bold t-rounded bg-twitter opacity-50">Post</button>
      </div>
    </section>
  )
}

export { NewPost };
