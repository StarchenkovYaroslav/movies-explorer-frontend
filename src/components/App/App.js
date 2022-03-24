import "./App.css";

import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

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
import mainApi from "../../utils/Api/MainApi";

function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const isHeaderVisible =
    (Object.values(paths).includes(location.pathname.slice(1)) || location.pathname === paths.main)
    && (loggedIn
    || location.pathname === paths.main);

  const isFooterVisible =
    (Object.values(paths).includes(location.pathname.slice(1)) || location.pathname === paths.main)
    && (location.pathname !== '/' + paths.profile
    && location.pathname !== '/' + paths.signUp
    && location.pathname !== '/' + paths.signIn);

  function handleSignUp(data) {
    mainApi.signUp(data)
      .then(() => {
        return mainApi.signIn({
          email: data.email,
          password: data.password,
        });
      })
      .then(() => {
        setLoggedIn(true);

        navigate('/' + paths.movies);
      })
      .catch(status => {
        console.log(status)
      });
  }

  function handleSignIn(evt) {
    evt.preventDefault();

    setLoggedIn(true);

    navigate('/' + paths.movies);
  }

  function handleSignOut() {
    setLoggedIn(false);

    navigate('/' + paths.signIn);
  }

  return (
    <div className="page">

      {isHeaderVisible ? <Header loggedIn={loggedIn} /> : null}

      <main className="content">
        <Routes>

          <Route path={paths.main} element={<Main/>} />
          <Route path={paths.movies} element={<AllMovies/>} />
          <Route path={paths.savedMovies} element={<UsersMovies/>} />
          <Route path={paths.profile} element={<Profile onSignOut={handleSignOut}/>} />
          <Route path={paths.signIn} element={<Login onSignIn={handleSignIn}/>} />
          <Route path={paths.signUp} element={<Register onSignUp={handleSignUp}/>} />

          <Route path="*" element={<NotFoundPage/>} />

        </Routes>
      </main>

      {isFooterVisible ? <Footer/> : null}

    </div>
  )
}

export default App;