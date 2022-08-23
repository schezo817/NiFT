import { LockClosedIcon } from '@heroicons/react/solid'
import { NextPage } from "next";
import Create from './Create ';
import Login from './login';
import Top from './top';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Top />
        <Login />
      </div>
      <div>
        <Create />
      </div>
    </>
  )
}

export default Home;