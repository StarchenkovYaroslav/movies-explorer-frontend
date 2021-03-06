import "./ProfileEdit.css";

import {useContext, useEffect} from "react";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import {nameValidator} from "../../utils/input-validators/name-validator";
import {emailValidator} from "../../utils/input-validators/email-validator";

function ProfileEdit(props) {
  const currentUser = useContext(CurrentUserContext);

  const areInputsActive = !props.isProfileEditing;

  const {
    inputValues,
    setInputValues,
    inputErrorMessages,
    handleInputChange,
    isFormValid
  } = useFormWithValidation(
    {name: currentUser.name, email: currentUser.email},
    {name: true, email: true},
    {name: '', email: ''},
    false,
    {
      name: nameValidator,
      email: emailValidator
    }
  );

  const isSubmitButtonActive = isFormValid && !props.isProfileEditing && Object.entries(inputValues).some(input => {
      const [inputName, inputValue] = input;

      return inputValue !== currentUser[inputName];
    });

  const submitButtonClassName = `profile-edit__submit-button${isSubmitButtonActive ? '' : ' profile-edit__submit-button_disabled'}`;

  useEffect(() => {
    setInputValues(prevInputValues => {
      const newInputValues = {...prevInputValues};

      Object.keys(newInputValues).forEach(inputName => {
        newInputValues[inputName] = currentUser[inputName];
      });

      return newInputValues;
    })
  }, [currentUser]);

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
              disabled={!areInputsActive}
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
              disabled={!areInputsActive}
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
        <button className={submitButtonClassName} type="submit" disabled={!isSubmitButtonActive}>Редактировать</button>
      </form>
    </section>
  );
}

export default ProfileEdit;
