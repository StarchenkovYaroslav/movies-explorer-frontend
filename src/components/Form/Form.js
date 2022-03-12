import "./Form.css";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form({ onSubmit, children, submitButtonText }) {
  return (
    <form className="page-with-form__form" onSubmit={onSubmit}>
      <div className="page-with-form__inputs-container">
        {children}
      </div>
      <SubmitButton text={submitButtonText} />
    </form>
  )
}

export default Form;
