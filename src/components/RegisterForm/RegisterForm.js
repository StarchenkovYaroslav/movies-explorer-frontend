import Form from "../Form/Form";
import Input from "../Input/Input";

function RegisterForm(props) {
  return (
    <Form
      submitButtonText="Зарегистрироваться"
    >
      <Input
        label="Имя"
        name="name"
        type="text"
        placeholder="Введите имя"
        id="profile-name"
        validationMessage="аяяй"
      />
      <Input
        label="E-mail"
        name="email"
        type="email"
        placeholder="Введите email"
        id="profile-email"
        validationMessage="аяяй"
      />
      <Input
        label="Пароль"
        name="password"
        type="password"
        placeholder="Введите пароль"
        id="profile-password"
        validationMessage="аяяй"
      />
    </Form>
  )
}

export default RegisterForm;
