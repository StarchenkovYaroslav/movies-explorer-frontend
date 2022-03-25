import "./App.css";

import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

import {CurrentUserContext, defaultUser} from "../../contexts/CurrentUserContext";

import { paths } from "../../utils/config";
import mainApi from "../../utils/Api/MainApi";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AllMovies from "../AllMovies/AllMovies";
import UsersMovies from "../UsersMovies/UsersMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {useEffect, useState} from "react";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState(defaultUser);

  const isHeaderVisible =
    Object.values(paths).includes(location.pathname.slice(1))
    && (loggedIn || location.pathname === '/' + paths.main);

  const isFooterVisible =
    Object.values(paths).includes(location.pathname.slice(1))
    && ((loggedIn && location.pathname !== '/' + paths.profile) || location.pathname === '/' + paths.main);

  useEffect(() => {
    mainApi.checkAuth()
      .then((data) => {
        setLoggedIn(data.isValid);
      })
      .catch(status => {
        console.log(status);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getCurrentUser()
        .then(user => {
          setCurrentUser(user);
        })
        .catch(status => {
          console.log(status);
        })
    }
  }, [loggedIn])

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

  function handleSignIn(data) {
    mainApi.signIn(data)
      .then(() => {
        setLoggedIn(true);

        navigate('/' + paths.movies);
      })
      .catch(status => {
        console.log(status)
      });
  }

  function handleSignOut() {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);

        navigate('/' + paths.signIn);
      })
      .catch((status) => {
        console.log(status);
      })
  }

  function handleEditProfile(data) {
    mainApi.editCurrentUser(data)
      .then(user => {
        setCurrentUser(user);
      })
      .catch((status) => {
        console.log(status);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        {isHeaderVisible ? <Header loggedIn={loggedIn} /> : null}

        <main className="content">
          <Routes>

            <Route path={paths.main} element={<Main/>} />
            <Route path={paths.movies} element={<AllMovies/>} />
            <Route path={paths.savedMovies} element={<UsersMovies/>} />
            <Route path={paths.profile} element={<Profile onEditProfile={handleEditProfile} onSignOut={handleSignOut}/>} />
            <Route path={paths.signIn} element={<Login onSignIn={handleSignIn}/>} />
            <Route path={paths.signUp} element={<Register onSignUp={handleSignUp}/>} />

            <Route path="*" element={<NotFoundPage/>} />

          </Routes>
        </main>

        {isFooterVisible ? <Footer/> : null}

      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;