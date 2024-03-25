import { SVG } from "../../SVG"
import { Button } from "../../Button/Button"

const Item = ({ children, username, photo }) => {
  return (
    <div className="w-full flex items-center gap-2">
      <img className="w-10 h-10 t-rounded" src={photo} alt={children} />
      <div className="grow flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-0.5">
            <h3 className="t-text-m font-bold">{children}</h3>
            <SVG name={'Verified'} w="18.75px" h="18.75px" color="#1d9bf0" />
          </div>
          <p className="t-text-m text-dark-gray">@{username}</p>
        </div>
        <Button height="32px" color="#000" bg="#fff">Follow</Button>
      </div>
    </div>
  )
}

const Follow = () => {
  const users = [
    {
      name: 'Platzi',
      username: 'platzi',
      photo: 'https://pbs.twimg.com/profile_images/1631734377439789064/6m8_I1pN_bigger.jpg',
    },
    {
      name: 'Jen Simmons',
      username: 'jensimmons',
      photo: 'https://pbs.twimg.com/profile_images/1273367498390462469/qL9jZluF_bigger.jpg',
    },
    {
      name: 'Dr. Michio Kal',
      username: 'michiokaku',
      photo: 'https://pbs.twimg.com/profile_images/2477428816/oyj5obfw5nrjiqhtylp9_bigger.jpeg',
    },
  ]

  return (
    <section className="py-3 px-4 flex items-start flex-col gap-6 rounded-2xl bg-aside">
      <h2 className="text-xl font-bold">Who to follow</h2>
      {
        users.map((user, index) => (
          <Item key={index} username={user.username} photo={user.photo}>{user.name}</Item>
        ))
      }
      <a className="t-text-m text-twitter" href="#">Show more</a>
    </section>
  )
}

export { Follow };
