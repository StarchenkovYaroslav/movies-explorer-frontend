import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import {emailValidator} from "../../utils/input-validators/email-validator";
import {nameValidator} from "../../utils/input-validators/name-validator";
import {passwordValidator} from "../../utils/input-validators/password-validator";

import Form from "../Form/Form";
import Input from "../Input/Input";

function RegisterForm(props) {
  const areInputsActive = !props.isSigningUp;

  const {
    inputValues,
    inputErrorMessages,
    isFormValid,
    handleInputChange,
  } = useFormWithValidation(
    {name: '', email: '', password: ''},
    {name: false, email: false, password: false},
    {name: '', email: '', password: ''},
    false,
    {
      name: nameValidator,
      email: emailValidator,
      password: passwordValidator
    }
  );

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSignUp(inputValues);
  }

  return (
    <Form
      isValid={isFormValid}
      isSubmitting={props.isSigningUp}

      submitButtonText="Зарегистрироваться"
      message={props.message}

      onSubmit={handleSubmit}
    >
      <Input
        required={true}
        disabled={!areInputsActive}
        autoComplete="on"
        label="Имя"
        name="name"
        type="text"
        placeholder="Введите имя"
        id="profile-name"
        onChange={handleInputChange}
        value={inputValues.name}
        validationMessage={inputErrorMessages.name}

      />
      <Input
        required={true}
        disabled={!areInputsActive}
        autoComplete="on"
        label="E-mail"
        name="email"
        type="email"
        placeholder="Введите email"
        id="profile-email"
        onChange={handleInputChange}
        value={inputValues.email}
        validationMessage={inputErrorMessages.email}
      />
      <Input
        required={true}
        disabled={!areInputsActive}
        autoComplete="off"
        label="Пароль"
        name="password"
        type="password"
        placeholder="Введите пароль"
        id="profile-password"
        onChange={handleInputChange}
        value={inputValues.password}
        validationMessage={inputErrorMessages.password}
      />
    </Form>
  )
}

export default RegisterForm;
