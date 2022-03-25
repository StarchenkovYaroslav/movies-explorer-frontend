import "./ProfileEdit.css";

import {useContext} from "react";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import nameValidator from "../../utils/input-validators/name-validator";
import emailValidator from "../../utils/input-validators/email-validator";

function ProfileEdit(props) {
  const currentUser = useContext(CurrentUserContext);

  const {
    inputValues,
    inputErrorMessages,
    handleInputChange,
    isFormValid
  } = useFormWithValidation(
    {name: currentUser.name, email: currentUser.email},
    {name: true, email: true},
    {name: '', email: ''},
    false,
    {
      name: {
        validate: nameValidator,
        message: '2-30 символов. Только буквы, пробел и дефис'
      },
      email: {
        validate: emailValidator,
        message: 'введите корректный email'
      }
    }
  );

  const submitButtonClassName = `profile-edit__submit-button${isFormValid ? '' : ' profile-edit__submit-button_disabled'}`;

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onEditProfile(inputValues);
  }

  return (
    <section className="profile-edit">
      <form className="profile-edit__form" noValidate={true} onSubmit={handleSubmit}>
        <div className="profile-edit__inputs-container">
          <fieldset className="profile-edit__input-container">
            <label className="profile-edit__input-label" htmlFor="name">Имя</label>
            <input
              className="profile-edit__input"
              required={true}
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
              value={inputValues.name}
              onChange={handleInputChange}
            />
          </fieldset>
          <span className="profile-edit__input-error-message">{inputErrorMessages.name}</span>
          <fieldset className="profile-edit__input-container">
            <label className="profile-edit__input-label" htmlFor="email">E-mail</label>
            <input
              className="profile-edit__input"
              required={true}
              id="email"
              name="email"
              type="email"
              placeholder="email"
              value={inputValues.email}
              onChange={handleInputChange}
            />
          </fieldset>
          <span className="profile-edit__input-error-message">{inputErrorMessages.email}</span>
        </div>
        <span className="profile-edit__form-message">{props.message}</span>
        <button className={submitButtonClassName} type="submit" disabled={!isFormValid}>Редактировать</button>
      </form>
    </section>
  );
}

export default ProfileEdit;
