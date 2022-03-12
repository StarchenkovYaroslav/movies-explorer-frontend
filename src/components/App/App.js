import "./App.css";

import {Routes, Route, useLocation} from "react-router-dom";

import { paths } from "../../utils/config";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AllMovies from "../AllMovies/AllMovies";
import UsersMovies from "../UsersMovies/UsersMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {useState} from "react";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);

  const isHeaderVisible = Object.values(paths).includes(location.pathname.slice(1))
    && (loggedIn
    || location.pathname === '/' + paths.main
    || location.pathname === '/' + paths.profile);

  const isFooterVisible = Object.values(paths).includes(location.pathname.slice(1))
    && location.pathname !== '/' + paths.profile
    && location.pathname !== '/' + paths.signUp
    && location.pathname !== '/' + paths.signIn;

  return (
    <div className="page">

      {isHeaderVisible ? <Header loggedIn={false} /> : null}

      <main className="content">
        <Routes>

          <Route path={paths.main} element={<Main/>} />
          <Route path={paths.movies} element={<AllMovies/>} />
          <Route path={paths.savedMovies} element={<UsersMovies/>} />
          <Route path={paths.profile} element={<Profile/>} />
          <Route path={paths.signIn} element={<Login/>} />
          <Route path={paths.signUp} element={<Register/>} />

          <Route path="*" element={<NotFoundPage/>} />

        </Routes>
      </main>

      {isFooterVisible ? <Footer/> : null}

    </div>
  )
}

export default App;