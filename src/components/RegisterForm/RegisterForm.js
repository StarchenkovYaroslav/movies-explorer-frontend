import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import {emailValidator} from "../../utils/input-validators/email-validator";
import {nameValidator} from "../../utils/input-validators/name-validator";

import Form from "../Form/Form";
import Input from "../Input/Input";

function RegisterForm(props) {
  const {
    inputValues,
    inputErrorMessages,
    isFormValid,
    handleInputChange,
  } = useFormWithValidation(
    {name: '', email: '', password: ''},
    {name: true, email: true, password: true},
    {name: '', email: '', password: ''},
    false,
    {
      name: nameValidator,
      email: emailValidator
    }
  );

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSignUp(inputValues);
  }

  return (
    <Form
      submitButtonText="Зарегистрироваться"
      isValid={isFormValid}
      onSubmit={handleSubmit}
      message={props.message}
    >
      <Input
        required={true}
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
