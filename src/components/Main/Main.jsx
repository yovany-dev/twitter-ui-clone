import { Content } from './Content';
import { Aside } from './Aside';

const Main = () => {
  return (
    <main className='mt-[105px]'>
      <div>
        <Content />
        <Aside />
      </div>
    </main>
  )
}

export { Main };
