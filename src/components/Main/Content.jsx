import { useState, useEffect } from 'react';
import { Tweet } from './Tweet/Tweet';

const Content = () => {
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
    <div>
      {data && data.map(item => <Tweet profile={item.profile} content={item.content} data={item.data} date={item.date} />)}
    </div>
  )
}

export { Content };
