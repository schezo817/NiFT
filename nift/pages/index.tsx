import { LockClosedIcon } from '@heroicons/react/solid'
import { NextPage } from "next";
import Create from './Create ';
import Login from './login';
import Navbar from './navbar';
import Top from './top';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Top />
        <Login />
      </div>
      <div>
        <Navbar />
        <Create />
      </div>
    </>
  )
}

export default Home;