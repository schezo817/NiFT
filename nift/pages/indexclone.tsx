import { LockClosedIcon } from '@heroicons/react/solid'
import { NextPage } from "next";
import Create from './Create ';
import SelectAvatar from './SelectAvatar';
import Cardfooter from './cardfooter';
import Centergrid from './centergrid';
import Dashboard from './dashboard';
import Expandablesidebar from './expandablesidebar';
import Justified from './justified';
import Login from './login';
import Market from './market';
import Navbar from './navbar';
import Quickview from './quickview';
import Sideover from './sideover';
import Top from './top';
import Withclose from './withclose';
import Withimagegrid from './withimagegrid';

const Home: NextPage = () => {
  return (
    <>
      <div>
        {/* <Withclose /> */}
        <Top />
        <Login />
        <Justified />
        <Sideover />
        <Centergrid />
        <Expandablesidebar />
        <Market />
      </div>
      <div>
        <Navbar />
        <Quickview />
        <Withimagegrid />
        <Create />
        <Cardfooter />
        <Dashboard />
        <SelectAvatar />
      </div>
    </>
  )
}

export default Home;