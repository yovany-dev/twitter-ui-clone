import { SVG } from "../../SVG"

const Item = ({ children, posts }) => {
  return (
    <div className="w-full flex justify-between">
      <div>
        <p className="text-[13px] text-dark-gray">Trending in Guatemala</p>
        <h3 className="t-text-m font-bold">{children}</h3>
        <p className="text-[13px] text-dark-gray">{posts} posts</p>
      </div>
      <div>
        <SVG name={'ThreePoints'} w="18.75px" h="18.75px" color="#71767b" />
      </div>
    </div>
  )
}

const Trends = () => {
  const trends = [
    {
      title: 'Meta',
      posts: '130k'
    },
    {
      title: 'Disney',
      posts: '73k'
    },
    {
      title: 'Vini',
      posts: '61.1k'
    },
    {
      title: 'Shirley Rivera',
      posts: '1,582'
    },
    {
      title: 'Giammattei',
      posts: '1,086'
    },
    {
      title: 'Congreso',
      posts: '146k'
    },
    {
      title: 'Luis Von Ahn',
      posts: '250k'
    },
  ];
  return (
    <section className="py-3 px-4 flex items-start flex-col gap-6 rounded-2xl bg-aside">
      <h2 className="text-xl font-bold">Trends for you</h2>
      {trends.map((trend, index) => (
        <Item key={index} posts={trend.posts}>{trend.title}</Item>
      ))}
    </section>
  )
}

export { Trends };
