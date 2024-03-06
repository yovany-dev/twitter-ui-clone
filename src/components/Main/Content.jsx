import { useState, useEffect } from 'react';
import { Tweet } from './Tweet/Tweet';

const Content = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data/data.json', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  return (
    <div className='988:w-full 988:max-w-[600px] 988:grow 988:shrink-0'>
      {children}
      {data && data.map((item, index) => <Tweet key={index} profile={item.profile} content={item.content} data={item.data} date={item.date} />)}
    </div>
  )
}

export { Content };
