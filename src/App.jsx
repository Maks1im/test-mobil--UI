import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage.jsx";
import AccountPage from "./pages/user/AccountPage.jsx";
import UsersAccount from "./pages/user/UsersAccount.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
            <Route path={"/account"} element={<AccountPage />}/>
            <Route path={"/user"} element={<UsersAccount />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App