import Form from "../Form/Form";
import Input from "../Input/Input";

import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";

function LoginForm(props) {
  const {
    inputValues,
    inputErrorMessages,
    isFormValid,
    handleInputChange,
  } = useFormWithValidation(
    {email: '', password: ''},
    {email: true, password: true},
    {email: '', password: ''},
    false
  );

  function handleSingIn(evt) {
    evt.preventDefault();

    props.onSignIn(inputValues);
  }

  return (
    <Form
      submitButtonText="Войти"
      onSubmit={handleSingIn}
      isValid={isFormValid}
    >
      <Input
        required={true}
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

export default LoginForm;
