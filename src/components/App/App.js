import "./App.css";

import {useEffect, useState} from "react";

import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

import {CurrentUserContext, defaultUser} from "../../contexts/CurrentUserContext";

import {messages, paths} from "../../utils/config";
import mainApi from "../../utils/Api/MainApi";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AllMovies from "../AllMovies/AllMovies";
import UsersMovies from "../UsersMovies/UsersMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import AuthorizedComponent from "../AuthorizedComponent/AuthorizedComponent";
import UnauthorizedComponent from "../UnauthorizedComponent/UnauthorizedComponent";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState(defaultUser);

  const [signUpMessage, setSignUpMessage] = useState('');
  const [signInMessage, setSignInMessage] = useState('');
  const [editProfileMessage, setEditProfileMessage] = useState('');

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
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getCurrentUser()
        .then(user => {
          setCurrentUser(user);
        })
        .catch(err => {
          console.log(err.message);
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
      .catch((err) => {
        setSignUpMessage(err.message);
      });
  }

  function handleSignIn(data) {
    mainApi.signIn(data)
      .then(() => {
        setLoggedIn(true);

        navigate('/' + paths.movies);
      })
      .catch((err) => {
        setSignInMessage(err.message);
      });
  }

  function handleSignOut() {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);

        localStorage.clear();

        navigate('/' + paths.signIn);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleEditProfile(data) {
    mainApi.editCurrentUser(data)
      .then(user => {
        setCurrentUser(user);

        setEditProfileMessage(messages.profileEditSuccessMessage);
      })
      .catch((err) => {
        setEditProfileMessage(err.message);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        {isHeaderVisible ? <Header loggedIn={loggedIn} /> : null}

        <main className="content">
          <Routes>

            <Route path={paths.main} element={<Main/>} />

            <Route
              path={paths.movies}
              element={
                <AuthorizedComponent
                  component={<AllMovies/>}
                  loggedIn={loggedIn}
                  pathToRedirect={'/' + paths.signIn}
                />
              }
            />

            <Route
              path={paths.savedMovies}
              element={
                <AuthorizedComponent
                  component={<UsersMovies/>}
                  loggedIn={loggedIn}
                  pathToRedirect={'/' + paths.signIn}
                />
              }
            />

            <Route
              path={paths.profile}
              element={
                <AuthorizedComponent
                  component={
                    <Profile
                      message={editProfileMessage}
                      onEditProfile={handleEditProfile}
                      onSignOut={handleSignOut}
                    />
                  }
                  loggedIn={loggedIn}
                  pathToRedirect={'/' + paths.signIn}
                />
              }
            />

            <Route
              path={paths.signIn}
              element={
                <UnauthorizedComponent
                  component={
                    <Login
                      message={signInMessage}
                      onSignIn={handleSignIn}
                    />
                  }
                  loggedIn={loggedIn}
                  pathToRedirect={'/' + paths.movies}
                />
              }
            />

            <Route
              path={paths.signUp}
              element={
                <UnauthorizedComponent
                  component={
                    <Register
                      message={signUpMessage}
                      onSignUp={handleSignUp}
                    />
                  }
                  loggedIn={loggedIn}
                  pathToRedirect={'/' + paths.movies}
                />
              }
            />

            <Route path="*" element={<NotFoundPage/>} />

          </Routes>
        </main>

        {isFooterVisible ? <Footer/> : null}

      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;