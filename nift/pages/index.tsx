import { LockClosedIcon } from '@heroicons/react/solid'
import { NextPage } from "next";
import Create from './Create ';
import Login from './login';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Login />
      </div>
      <div>
        <Create />
      </div>
    </>
  )
}

export default Home;