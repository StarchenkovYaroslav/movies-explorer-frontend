import "./Login.css";

import {paths} from "../../utils/config";

import PageWithForm from "../PageWithForm/PageWithForm";
import Greeting from "../Greeting/Greeting";
import LoginForm from "../LoginForm/LoginForm";
import Suggestion from "../Suggestion/Suggestion";

function Login(props) {
  return (
    <div className="login">
      <PageWithForm>
        <Greeting text="Рады видеть!" />
        <LoginForm onSignIn={props.onSignIn} message={props.message} />
        <Suggestion linkPath={`/${paths.signUp}`} linkText="Регистрация" questionText="Ещё не зарегистрированы?" />
      </PageWithForm>
    </div>
  );
}

export default Login;