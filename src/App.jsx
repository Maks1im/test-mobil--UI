import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage.jsx";
import AccountPage from "./pages/user/AccountPage.jsx";
import UsersAccount from "./pages/user/UsersAccount.jsx";
import AboutUS from "./pages/about_us/AboutUS.jsx";
import Add from "./pages/add/Add.jsx";
import LogIn from "./pages/authen/LogIn.jsx";
import SignUp from "./pages/authen/SignUp.jsx";
import Recommendations from "./pages/recommendations/Recommendations.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Watch from "./pages/watch/Watch.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/амвамвам"} element={<LogIn />} />
          <Route path={"/signup"} element={<SignUp />}/>
          <Route path={"/"} element={<HomePage />} />
            <Route path={"/account"} element={<AccountPage />}/>
            <Route path={"/user"} element={<UsersAccount />}/>
            <Route path={"/about"} element={<AboutUS />}/>
          <Route path={"/add"} element={<Add/>}/>
          <Route path={"/recommendations"} element={<Recommendations />}/>
          <Route path={"/settings"} element={<Settings />}/>
          <Route path={"/watch"} element={<Watch />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App