import "./Page.css";

import {Route, Routes, useLocation} from "react-router-dom";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";

import {paths} from "../../utils/config";

import Header from "../Header/Header";
import Main from "../Main/Main";
import AuthorizedComponent from "../AuthorizedComponent/AuthorizedComponent";
import AllMovies from "../AllMovies/AllMovies";
import UsersMovies from "../UsersMovies/UsersMovies";
import Profile from "../Profile/Profile";
import UnauthorizedComponent from "../UnauthorizedComponent/UnauthorizedComponent";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Footer from "../Footer/Footer";

function Page(props) {
  const location = useLocation();

  const isHeaderVisible =
    Object.values(paths).includes(location.pathname.slice(1))
    && (props.loggedIn || location.pathname === '/' + paths.main);

  const isFooterVisible =
    Object.values(paths).includes(location.pathname.slice(1))
    && ((props.loggedIn && location.pathname !== '/' + paths.profile) || location.pathname === '/' + paths.main);

  return (
    <CurrentUserContext.Provider value={props.currentUser}>
      <div className="page">

        {isHeaderVisible ? <Header loggedIn={props.loggedIn} /> : null}

        <main className="content">
          <Routes>

            <Route path={paths.main} element={<Main/>} />

            <Route
              path={paths.movies}
              element={
                <AuthorizedComponent
                  component={<AllMovies/>}
                  loggedIn={props.loggedIn}
                  pathToRedirect={'/' + paths.main}
                />
              }
            />

            <Route
              path={paths.savedMovies}
              element={
                <AuthorizedComponent
                  component={<UsersMovies/>}
                  loggedIn={props.loggedIn}
                  pathToRedirect={'/' + paths.main}
                />
              }
            />

            <Route
              path={paths.profile}
              element={
                <AuthorizedComponent
                  component={
                    <Profile
                      message={props.editProfileMessage}
                      isProfileEditing={props.isProfileEditing}
                      isSigningOut={props.isSigningOut}

                      onEditProfile={props.onEditProfile}
                      onSignOut={props.onSignOut}
                    />
                  }
                  loggedIn={props.loggedIn}
                  pathToRedirect={'/' + paths.main}
                />
              }
            />

            <Route
              path={paths.signIn}
              element={
                <UnauthorizedComponent
                  component={
                    <Login
                      message={props.signInMessage}
                      isSigningIn={props.isSigningIn}

                      onSignIn={props.onSignIn}
                    />
                  }
                  loggedIn={props.loggedIn}
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
                      message={props.signUpMessage}
                      isSigningUp={props.isSigningUp}

                      onSignUp={props.onSignUp}
                    />
                  }
                  loggedIn={props.loggedIn}
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

export default Page;
