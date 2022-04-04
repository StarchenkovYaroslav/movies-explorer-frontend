import "./ProfileGreeting.css";

import {useContext} from "react";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function ProfileGreeting() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile-greeting">
      <h1 className="profile-greeting__title">Привет, {currentUser.name}</h1>
    </section>
  )
}

export default ProfileGreeting;
