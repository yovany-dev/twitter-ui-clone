import { Image } from "./Image";

const Content = ({ text, image }) => {
  return (
    <section className='mt-0.5 flex flex-col gap-3'>
      <p className='leading-5 font-normal'>{text}</p>
      {image && <Image url={image.url} description={image.description} />}
    </section>
  )
}

export { Content };
