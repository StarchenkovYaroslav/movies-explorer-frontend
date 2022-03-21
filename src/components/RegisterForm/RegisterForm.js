import Form from "../Form/Form";
import Input from "../Input/Input";
import {useFormWithValidation} from "../../utils/hooks/use-form-with-validation";

function RegisterForm(props) {
  const {
    inputValues,
    inputsValidity,
    inputErrorMessages,
    isFormValid,
    handleInputChange,
    resetForm
  } = useFormWithValidation(
    {name: '', email: '', password: ''},
    {name: true, email: true, password: ''},
    {name: '', email: '', password: ''},
    false
  );

  return (
    <Form
      submitButtonText="Зарегистрироваться"
      isValid={isFormValid}
    >
      <Input
        required={true}
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

export default RegisterForm;
