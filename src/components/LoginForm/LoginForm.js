import Form from "../Form/Form";
import Input from "../Input/Input";

function LoginForm(props) {
  return (
    <Form
      submitButtonText="Войти"
      onSubmit={props.onSubmit}
    >
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

export default LoginForm;
