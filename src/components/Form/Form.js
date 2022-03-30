import "./Form.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import FormMessage from "../FormMessage/FormMessage";

function Form(props) {
  const isSubmitButtonActive = !props.isSubmitting && props.isValid;

  return (
    <form className="page-with-form__form" noValidate={true} onSubmit={props.onSubmit}>
      <div className="page-with-form__inputs-container">
        {props.children}
      </div>
      <FormMessage message={props.message} />
      <SubmitButton text={props.submitButtonText} isActive={isSubmitButtonActive} />
    </form>
  )
}

export default Form;
