import {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";

import {defaultUser} from "../../contexts/CurrentUserContext";

import {messages, paths} from "../../utils/config";
import mainApi from "../../utils/Api/mainApi";

import Page from "../Page/Page";

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [wasLoggedInChecked, setWasLoggedInChecked] = useState(false);

  const [currentUser, setCurrentUser] = useState(defaultUser);

  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  const [signUpMessage, setSignUpMessage] = useState('');
  const [signInMessage, setSignInMessage] = useState('');
  const [editProfileMessage, setEditProfileMessage] = useState('');

  useEffect(() => {
    mainApi.checkAuth()
      .then((data) => {
        setLoggedIn(data.isValid);
      })
      .catch(err => {
        console.log(err.message);
      })
      .finally(() => {
        setWasLoggedInChecked(true);
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
    setIsSigningUp(true);
    setSignUpMessage('');

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
      })
      .finally(() => {
        setIsSigningUp(false);
      });
  }

  function handleSignIn(data) {
    setIsSigningIn(true);
    setSignInMessage('');

    mainApi.signIn(data)
      .then(() => {
        setLoggedIn(true);

        navigate('/' + paths.movies);
      })
      .catch((err) => {
        setSignInMessage(err.message);
      })
      .finally(() => {
        setIsSigningIn(false);
      });
  }

  function handleSignOut() {
    setIsSigningOut(true);

    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);

        localStorage.clear();

        navigate('/' + paths.main);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsSigningOut(false);
      });
  }

  function handleEditProfile(data) {
    setIsProfileEditing(true);
    setEditProfileMessage('');

    mainApi.editCurrentUser(data)
      .then(user => {
        setCurrentUser(user);

        setEditProfileMessage(messages.profileEditSuccessMessage);
      })
      .catch((err) => {
        setEditProfileMessage(err.message);
      })
      .finally(() => {
        setIsProfileEditing(false);
      });
  }

  return (
    wasLoggedInChecked ?
      <Page
        loggedIn={loggedIn}

        currentUser={currentUser}

        isSigningUp={isSigningUp}
        isSigningIn={isSigningIn}
        isSigningOut={isSigningOut}
        isProfileEditing={isProfileEditing}

        signUpMessage={signUpMessage}
        signInMessage={signInMessage}
        editProfileMessage={editProfileMessage}

        onSignUp={handleSignUp}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
        onEditProfile={handleEditProfile}
      />
      : null
  );
}

export default App;