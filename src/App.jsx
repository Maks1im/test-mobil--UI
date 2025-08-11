import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage.jsx";
import AccountPage from "./pages/user/AccountPage.jsx";
import UsersAccount from "./pages/user/UsersAccount.jsx";
import AboutUS from "./pages/about_us/AboutUS.jsx";
import Add from "./pages/add/Add.jsx";
import LogIn from "./pages/authen/LogIn.jsx";
import SignUp from "./pages/authen/SignUp.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LogIn />} />
          <Route path={"/signup"} element={<SignUp />}/>
          <Route path={"/home"} element={<HomePage />} />
            <Route path={"/account"} element={<AccountPage />}/>
            <Route path={"/user"} element={<UsersAccount />}/>
            <Route path={"/about"} element={<AboutUS />}/>
          <Route path={"/add"} element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App