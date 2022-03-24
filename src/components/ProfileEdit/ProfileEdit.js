import "./ProfileEdit.css";

import {useContext} from "react";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";

function ProfileEdit(props) {
  const currentUser = useContext(CurrentUserContext);

  const {
    inputValues,
    handleInputChange,
  } = useFormWithValidation(
    {name: currentUser.name, email: currentUser.email},
    {name: true, email: true},
    {name: '', email: ''},
    false
  );

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onEditProfile(inputValues);
  }

  return (
    <section className="profile-edit">
      <form className="profile-edit__form" onSubmit={handleSubmit}>
        <div className="profile-edit__inputs-container">
          <fieldset className="profile-edit__input-container">
            <label className="profile-edit__input-label" htmlFor="name">Имя</label>
            <input
              className="profile-edit__input"
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
              value={inputValues.name}
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset className="profile-edit__input-container">
            <label className="profile-edit__input-label" htmlFor="email">E-mail</label>
            <input
              className="profile-edit__input"
              id="email"
              name="email"
              type="email"
              placeholder="email"
              value={inputValues.email}
              onChange={handleInputChange}
            />
          </fieldset>
        </div>
        <button className="profile-edit__submit-button" type="submit">Редактировать</button>
      </form>
    </section>
  );
}

export default ProfileEdit;
