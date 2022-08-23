import { LockClosedIcon } from '@heroicons/react/solid'
import { NextPage } from "next";
import Create from './Create ';
import SelectAvatar from './SelectAvatar';
import Cardfooter from './cardfooter';
import Dashboard from './dashboard';
import Login from './login';
import Navbar from './navbar';
import Top from './top';
import Withclose from './withclose';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Withclose />
        <Top />
        <Login />
      </div>
      <div>
        <Navbar />
        <Create />
        <Cardfooter />
        <Dashboard />
        <SelectAvatar />
      </div>
    </>
  )
}

export default Home;