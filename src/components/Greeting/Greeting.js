import "./Greeting.css";
import Logo from "../Logo/Logo";

function Greeting({ text }) {
  return (
    <div className="page-with-form__greeting">
      <Logo />
      <h1 className="page-with-form__greeting-title">{text}</h1>
    </div>
  )
}

export default Greeting;
