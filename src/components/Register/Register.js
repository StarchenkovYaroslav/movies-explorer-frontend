import "./Register.css";

import {paths} from "../../utils/config";

import Greeting from "../Greeting/Greeting";
import RegisterForm from "../RegisterForm/RegisterForm";
import PageWithForm from "../PageWithForm/PageWithForm";
import Suggestion from "../Suggestion/Suggestion";

function Register() {
  return (
    <section className="register">
      <PageWithForm>
        <Greeting text="Добро пожаловать!" />
        <RegisterForm />
        <Suggestion linkPath={`/${paths.signIn}`} linkText="Войти" questionText="Уже зарегистрированы?" />
      </PageWithForm>
    </section>
  );
}

export default Register;