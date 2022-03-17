import "./Form.css";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form({ onSubmit, children, submitButtonText, isValid }) {
  return (
    <form className="page-with-form__form" onSubmit={onSubmit}>
      <div className="page-with-form__inputs-container">
        {children}
      </div>
      <SubmitButton text={submitButtonText} isActive={isValid} />
    </form>
  )
}

export default Form;
