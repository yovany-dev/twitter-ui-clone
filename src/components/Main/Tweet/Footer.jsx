import { SVG } from "../../SVG";
import { Action } from "./Action";
import { Item } from "./Item";

const Footer = ({ comment, retweet, like, views }) => {
  const actions = [
    {
      name: 'Comment',
      value: comment
    },
    {
      name: 'Retweet',
      value: retweet
    },
    {
      name: 'Like',
      value: like
    },
    {
      name: 'Views',
      value: views
    }
  ];

  return (
    <footer className='mt-3 flex justify-between text-[13px] text-dark-gray'>
      {actions.map((item, index) => <Action key={index} name={item.name} value={item.value} />)}
      <Item name={'Save'} />
      <Item name={'Share'} />
      <div className='hidden 500:flex 500:gap-3'>
        <SVG name={'Save'} w="20px" color="#71767b" />
        <SVG name={'Share2'} w="20px" color="#71767b" />
      </div>
    </footer>
  )
}

export { Footer };
