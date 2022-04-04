import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";
import {emailValidator} from "../../utils/input-validators/email-validator";
import {passwordValidator} from "../../utils/input-validators/password-validator";

import Form from "../Form/Form";
import Input from "../Input/Input";

function LoginForm(props) {
  const areInputsActive = !props.isSigningIn;

  const {
    inputValues,
    inputErrorMessages,
    isFormValid,
    handleInputChange,
  } = useFormWithValidation(
    {email: '', password: ''},
    {email: false, password: false},
    {email: '', password: ''},
    false,
    {
      email: emailValidator,
      password: passwordValidator
    }
  );

  function handleSingIn(evt) {
    evt.preventDefault();

    props.onSignIn(inputValues);
  }

  return (
    <Form
      isValid={isFormValid}
      isSubmitting={props.isSigningIn}

      submitButtonText="Войти"
      message={props.message}

      onSubmit={handleSingIn}
    >
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

export default LoginForm;
