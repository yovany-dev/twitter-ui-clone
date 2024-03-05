import { Avatar } from "./Avatar";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function Tweet({ profile, content, data, date }) {
  return (
    <article className='max-w-[600px] py-3 px-4 flex gap-2 t-text-m border-b 500:border-l 500:border-r border-very-dark-gray'>
      <section className='w-10 h-10 t-rounded overflow-hidden'>
        <Avatar
          url={profile.avatar.url}
          description={profile.avatar.description}
        />
      </section>
      <section className='flex-1 overflow-hidden'>
        <Header
          name={profile.name}
          username={profile.username}
          date={date}
        />
        <Content
          text={content.text}
          image={content.image}
        />
        <Footer
          comment={data.comment}
          retweet={data.retweet}
          like={data.like}
          views={data.views}
        />
      </section>
    </article>
  )
}

export { Tweet };
