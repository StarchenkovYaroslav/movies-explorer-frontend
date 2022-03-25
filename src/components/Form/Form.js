import "./Form.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import FormMessage from "../FormMessage/FormMessage";

function Form(props) {
  return (
    <form className="page-with-form__form" noValidate={true} onSubmit={props.onSubmit}>
      <div className="page-with-form__inputs-container">
        {props.children}
      </div>
      <FormMessage message={props.message} />
      <SubmitButton text={props.submitButtonText} isActive={props.isValid} />
    </form>
  )
}

export default Form;
