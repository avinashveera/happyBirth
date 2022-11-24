import style from "./main.module.css"
import Signup from "./pages/authpages/Signup";
import Login from "./pages/authpages/Login";
import Homepage from "./pages/Home/Homepage";
import Friends from "./pages/Home/Friends";
import AddFriend from "./pages/Home/addFriend";
import BirthdayMonth from './pages/Home/BithdayMonth.jsx'
import Past from "./pages/Home/Past"
import Upcoming from './pages/Home/Upcoming'

import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useSelector} from "react-redux";


function App() {


  const logged=useSelector(state=>state.login.token)

  return (

    <div className={style.mainDiv}>
      
       <BrowserRouter>
       <Routes>
         <Route path="/friends" element={<Friends />} ></Route>
         <Route path="/past" element={<Past />} ></Route>
         <Route path="/upcoming" element={<Upcoming />} ></Route>
         <Route path="/month" element={<BirthdayMonth />} ></Route>
         <Route path="/addfriend" element={<AddFriend />}></Route>
         <Route path="/" element={ logged ? <Homepage />:<Login/>} />
         <Route path="/signup" element={logged ? <Homepage />:<Signup />} />
         <Route path="/login" element={logged ? <Homepage />:<Login />} />
         
       </Routes>
       </BrowserRouter>
      
         
    </div>
  );
}

export default App;
